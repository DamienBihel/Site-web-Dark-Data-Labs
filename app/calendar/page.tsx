"use client"

import { ContentLayout } from "@/components/content/content-layout"
import { ContentHeader } from "@/components/content/content-header"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, Clock, Users } from "lucide-react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const benefits = [
  {
    icon: Calendar,
    title: "Consultation Gratuite",
    description: "30 minutes pour échanger sur vos besoins"
  },
  {
    icon: Clock,
    title: "Disponibilité Flexible",
    description: "Créneaux adaptés à votre emploi du temps"
  },
  {
    icon: Users,
    title: "Approche Personnalisée",
    description: "Solutions sur mesure pour votre entreprise"
  }
]

export default function CalendarPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#2ec4b6" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      })
    })()
  }, [])

  return (
    <ContentLayout>
      <ContentHeader
        title="Réservez votre consultation"
        subtitle="30 minutes pour transformer vos données en résultats"
        description="Échangeons sur vos besoins et découvrez comment nos solutions peuvent vous aider à atteindre vos objectifs."
      />

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr,400px] gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8">
                <Cal
                  calLink="damien-bihel-f3wz6k/consultation-rapide-dark-data-labs"
                  style={{ width: "100%", height: "100%", minHeight: "600px" }}
                  config={{
                    name: "Dark Data Labs",
                    email: "contact@darkdatalabs.fr",
                    theme: "light",
                    hideEventTypeDetails: false,
                    layout: "month_view"
                  }}
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Pourquoi nous rencontrer ?</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        className="flex gap-4"
                      >
                        <div className="shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-secondary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Au Programme</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-secondary">✓</span>
                    <span>Analyse de vos besoins</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-secondary">✓</span>
                    <span>Présentation des solutions</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-secondary">✓</span>
                    <span>Estimation budgétaire</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-secondary">✓</span>
                    <span>Prochaines étapes</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </ContentLayout>
  )
}