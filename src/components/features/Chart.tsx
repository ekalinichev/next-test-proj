"use client"

import { Chart as G2Chart } from "@antv/g2"
import { Skeleton } from "antd"
import { FC, useEffect, useRef, useState } from "react"

interface DataPoint {
  value: number
  label: string
}

type ChartType = "pie" | "bar"

interface PieChartProps {
  data: DataPoint[]
  type: ChartType
}

interface ChartDataPoint extends DataPoint {
  percentage: number
}

interface ChartBuilderOptions {
  container: HTMLElement
  data: DataPoint[]
}

type ChartFactory = (_opts: ChartBuilderOptions) => G2Chart

// NOTE: Realistically, this would be a separate file
const chartFactories: Record<ChartType, ChartFactory> = {
  pie: ({ container, data }) => {
    const chart = new G2Chart({
      container: container,
      autoFit: true,
    })

    chart.coordinate({ type: "theta", outerRadius: 0.8 })

    const totalValue = data.reduce((acc, { value }) => acc + value, 0)

    const chartData: ChartDataPoint[] = data.map(({ value, label }) => ({
      value, label,
      percentage: Math.round((value / totalValue) * 100),
    }))

    chart
      .interval()
      .data(chartData)
      .transform({ type: "stackY" })
      .encode("y", "percentage")
      .encode("color", "label")
      .legend("color", { position: "bottom", layout: { justifyContent: "center" } })
      .label({
        position: "outside",
        text: ({ label, percentage }: ChartDataPoint) => `${label}: ${percentage}%`,
      })

    return chart
  },

  bar: ({ container, data }) => {
    const chart = new G2Chart({
      container: container,
      autoFit: true,
    })

    chart
      .interval()
      .coordinate({ transform: [{ type: "transpose" }] })
      .data(data)
      .encode("x", "label")
      .encode("y", "value")
      .axis({ x: { title: false }, y: { title: false } })

    return chart

  }
}

export const Chart: FC<PieChartProps> = ({ data, type }) => {
  const [loading, setLoading] = useState(true)

  const container = useRef(null)
  const chart = useRef<G2Chart | null>(null)

  useEffect(() => {
    if (chart.current || !container.current) return

    chart.current = chartFactories[type]({ container: container.current, data })

    chart.current.render()
      .then(() => {
        setLoading(false)
      })

    return () => {
      chart.current?.destroy()
      chart.current = null
    }
  }, [chart, container, data, type ])

  return (
    <>
      <Skeleton loading={loading} />
      <div ref={container} style={{ display: loading ? "none" : "block" }} />
    </>
  )
}
