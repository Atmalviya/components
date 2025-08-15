"use client"

import { memo } from "react"
import { motion } from "framer-motion"

// Memoized AnimatedTitle component
const AnimatedTitle = memo(function AnimatedTitle({
  title,
}: {
  title: string
}) {
  return (
    <motion.h1
      className="text-3xl sm:text-5xl md:text-5xl font-bold mb-8 tracking-tighter
                text-transparent bg-clip-text bg-gradient-to-r 
                from-neutral-800/90 to-neutral-600/90
                dark:from-white/90 dark:to-white/70"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      {title}
    </motion.h1>
  )
})

export default memo(function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[linear-gradient(120deg,_#543F73_0%,_#5E4C79_25%,_#C6A9F3_50%,_#5E4C79_75%,_#543F73_100%)]">
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 3,
          ease: "easeOut",
          delay: 0.5,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          {title && <AnimatedTitle title={title} />}
        </motion.div>
      </div>
    </div>
  )
})
