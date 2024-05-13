import { z } from "zod"

import { publicProcedure, router } from "@/server/trpc"

const REGIONS = [
  "East Midlands",
  "East of England",
  "London",
  "North East",
  "North West",
  "South East",
  "South West",
  "West Midlands",
  "Yorkshire and The Humber",
]

const getUrl = (region: string, date: Date) => {
  const formattedDate = date.toISOString().split("T")[0]
  return `https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Government%20Office%20Region/geographies/${encodeURIComponent(region)}/metrics/COVID-19_deaths_ONSByDay?date=${formattedDate}`
}

interface DataRecord {
  geography: string
  date: string
  metric_value: number
}

const fetchRecord = async (region: string, date: Date): Promise<DataRecord> => {
  const url = getUrl(region, date)
  const response = await fetch(url)
  const { results } = await response.json()
  return results[0]
}

const fetchRecords = async (date: Date): Promise<DataRecord[]> => {
  const data = await Promise.all(REGIONS.map(region => fetchRecord(region, date)))

  return data.map(({ geography, date, metric_value }) => ({ geography, date, metric_value }))
}

export const covidRouter = router({
  deaths: publicProcedure
    .input(
      z.object({
        date: z.date(),
      })
    )
    .query(async ({ input }) => {
      const { date } = input
      return fetchRecords(date)
    }),
})
