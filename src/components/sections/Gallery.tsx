'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, X } from 'lucide-react'

interface VideoItem {
  id: number
  title: string
  category: string
  embedUrl: string
  description: string
  isLocal?: boolean
  thumbnailUrl?: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'High-Energy Dance Training',
    category: 'Training',
    embedUrl: 'https://www.youtube.com/embed/F8YNwVBtLMc?si=CzMp2R8PtnIweCIy',
    description: 'An intense rehearsal session showcasing discipline, coordination, and growing confidence.'
  },
  {
    id: 2,
    title: 'Stage Performance Showcase',
    category: 'Performance',
    embedUrl: 'https://streamable.com/e/05190o',
    description: 'A powerful live performance demonstrating professionalism, passion, and unity.',
    isLocal: false,
    thumbnailUrl: '/3.jpeg'
  },
  {
    id: 3,
    title: 'Talent in Action',
    category: 'Community',
    embedUrl: 'https://www.youtube.com/embed/uBXWUsyeRQY?si=tHKi8ngVhD4JqZVd',
    description: 'A vibrant moment highlighting creativity, teamwork, and the spirit of Mathare.'
  }
]

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Life at <span className="text-[#F59E0B]">Mathare Kids</span>
          </h2>
          <p className="text-lg text-[#111111]/70 max-w-2xl mx-auto">
            Watch our journey through dance, music, and community
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group bg-[#F9FAFB] rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="aspect-video bg-[#F3F4F6] relative overflow-hidden">
                {video.isLocal ? (
                  <video 
                    src={video.embedUrl}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                ) : video.thumbnailUrl ? (
                  <img 
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={`https://img.youtube.com/vi/${video.embedUrl.split('/embed/')[1].split('?')[0]}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-[#111111]/20 flex items-center justify-center group-hover:bg-[#111111]/30 transition-colors">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-7 h-7 text-[#111111] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold rounded-full mb-3">
                  {video.category}
                </span>
                <h3 className="text-[#111111] font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-[#111111]/60 text-sm leading-relaxed">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="https://www.youtube.com/@matharekidstalentshub" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#F59E0B] hover:text-[#D97706] transition-colors text-sm font-semibold"
          >
            View more on YouTube
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-[#111111]/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#111111]/50 hover:bg-[#111111]/70 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-[#111111]">
                {selectedVideo.isLocal ? (
                  <video
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                ) : (
                  <iframe
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold rounded-full mb-3">
                  {selectedVideo.category}
                </span>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{selectedVideo.title}</h3>
                <p className="text-[#111111]/70 leading-relaxed">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
