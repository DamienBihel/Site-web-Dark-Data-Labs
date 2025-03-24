'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/shared/ui/button"
import { Card, CardContent } from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Quote } from "lucide-react"
import { type CaseStudy } from "@/types/case-study"
import { TableauViz } from "@/components/features/tableau/TableauViz"
import { Separator } from "@/components/shared/ui/separator"

interface CaseStudyDetailProps extends BaseComponentProps {
  study: CaseStudy
}

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
}

function CaseStudyDetail({ study, className, ...props }: CaseStudyDetailProps) {
  return (
    <article className={cn("py-16 md:py-24 bg-[#0A0A0A]", className)} {...props}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div variants={animations.item}>
              <Badge variant="outline" className="mb-4 uppercase tracking-wider font-semibold">
                {study.industry} • {study.client}
              </Badge>
            </motion.div>
            <motion.h1 
              variants={animations.item}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-montserrat uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-[#00FF85]/60"
            >
              {study.title}
            </motion.h1>
            <motion.p 
              variants={animations.item}
              className="text-xl text-[#F2F2F2]/80 font-roboto leading-relaxed"
            >
              {study.description}
            </motion.p>
          </div>

          {/* Main Image */}
          <motion.div 
            variants={animations.item}
            className="relative aspect-video rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,133,0.2)] ring-1 ring-[#F2F2F2]/10"
          >
            <Image
              src={study.images.main}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.section variants={animations.item} className="space-y-4">
                <h2 className="text-3xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2]">Le Challenge</h2>
                <Separator className="my-4 bg-[#F2F2F2]/10" />
                <p className="text-[#F2F2F2]/80 font-roboto leading-relaxed">
                  {study.challenge}
                </p>
              </motion.section>

              {/* Solution */}
              <motion.section variants={animations.item} className="space-y-4">
                <h2 className="text-3xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2]">Notre Solution</h2>
                <Separator className="my-4 bg-[#F2F2F2]/10" />
                <div className="prose prose-invert max-w-none">
                  {study.solution.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-[#F2F2F2]/80 font-roboto leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>

              {/* Tableau Visualization */}
              {study.id === 'water-analysis' && (
                <motion.section 
                  variants={animations.item} 
                  className="mt-16 mb-16"
                >
                  <h2 className="text-3xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2] mb-4">
                    Visualisation Interactive
                  </h2>
                  <Separator className="mb-8 bg-[#F2F2F2]/10" />
                  <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 bg-[#1F1F1F]">
                    <div className="max-w-[1600px] w-full mx-auto">
                      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
                        <div className="mb-4 flex items-center justify-end gap-2 text-[#F2F2F2]/60">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            className="w-5 h-5"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0-4h-4m4 4l-5-5m-11 13v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4-4l-5 5"
                            />
                          </svg>
                          <span className="text-sm">
                            Cliquez sur l'icône plein écran pour une meilleure expérience
                          </span>
                        </div>
                        <TableauViz 
                          vizUrl="https://public.tableau.com/views/eaupotable_16713803499980/Histoire" 
                        />
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* Implementation */}
              <motion.section variants={animations.item} className="space-y-4">
                <h2 className="text-3xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2]">Mise en Place</h2>
                <Separator className="my-4 bg-[#F2F2F2]/10" />
                <div className="prose prose-invert max-w-none">
                  {study.implementation.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-[#F2F2F2]/80 font-roboto leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <motion.section variants={animations.item} className="space-y-4">
                <h2 className="text-3xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2]">Résultats</h2>
                <Separator className="my-4 bg-[#F2F2F2]/10" />
                <div className="grid gap-6 grid-cols-1">
                  {study.results.map((result, index) => (
                    <Card key={index} className="bg-[#1F1F1F] border-[#F2F2F2]/10 backdrop-blur-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#00FF85]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#00FF85] font-montserrat font-bold text-xl">
                              {index + 1}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#F2F2F2]">{result.title}</h3>
                            <p className="text-base text-[#F2F2F2]/60 leading-relaxed">{result.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>

              {/* Technologies */}
              <motion.section variants={animations.item} className="space-y-4">
                <h2 className="text-3xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2]">Technologies</h2>
                <Separator className="my-4 bg-[#F2F2F2]/10" />
                <div className="flex gap-2">
                  <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md bg-[#1F1F1F] border border-[#F2F2F2]/10 text-[#F2F2F2]">
                    Tableau
                  </div>
                </div>
              </motion.section>

              {/* Links */}
              {study.links && (
                <motion.section variants={animations.item}>
                  <Card className="bg-[#1F1F1F] border-[#F2F2F2]/10 backdrop-blur-md">
                    <CardContent className="p-6 space-y-4">
                      <h2 className="text-xl font-extrabold font-montserrat uppercase tracking-tight text-[#F2F2F2]">Liens</h2>
                      <Separator className="my-4 bg-[#F2F2F2]/10" />
                      <div className="space-y-3">
                        {study.links.github && (
                          <Link 
                            href={study.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#00FF85] hover:text-[#00FF85]/80 transition-colors"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code source sur GitHub
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>
              )}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            variants={animations.item}
            className="text-center pt-8"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="gap-2 bg-[#00FF85] text-[#0A0A0A] hover:bg-[#00FF85]/90 font-montserrat uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(0,255,133,0.2)]"
              >
                Démarrer votre projet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </article>
  )
}

export default CaseStudyDetail
