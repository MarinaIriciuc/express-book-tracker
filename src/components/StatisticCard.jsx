import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function StatisticCard() {
  return (
    <Card className="bg-gray-100/80 text-center flex flex-col justify-center p-12">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-wide">400</CardTitle>
      </CardHeader>
      <CardContent className="mt-1">
        <p className="text-sm">Books Finished</p>
      </CardContent>
    </Card>
  )
}
