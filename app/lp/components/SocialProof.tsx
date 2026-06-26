'use client';

import { motion } from 'framer-motion';
import { COLORS } from '@/lib/constants';

interface Comment {
  author: string;
  handle: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
}

const comments: Comment[] = [
  {
    author: 'Gilson Almeida',
    handle: 'gilson.almeida78',
    avatar: '👨',
    text: 'Muito bom esta planilha aprendi a usar em todos os vídeos!',
    timestamp: '19 h',
    likes: 24,
  },
  {
    author: 'Cidinha Pegoraro',
    handle: 'cidinha.pegoraro',
    avatar: '👩',
    text: 'Muito complicado pra ser fácil... mas com os vídeos tudo fica fácil! 💪',
    timestamp: '4 sem',
    likes: 142,
  },
  {
    author: 'Helder - Finanças',
    handle: 'helder.financas',
    avatar: '👨',
    text: 'Muito obrigado pela avaliação! 🎉',
    timestamp: '4 sem',
    likes: 8,
  },
  {
    author: 'Allenton Macedo',
    handle: 'allenton.macedo',
    avatar: '👨',
    text: 'Um dos meses melhores financeiramente pois comprei uma planilha e ser organizado financeiramente.',
    timestamp: '1 sem',
    likes: 31,
  },
];

export function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 sm:py-28 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-black mb-4" style={{ color: COLORS.dark }}>
            Veja o que nossos clientes dizem publicamente 📲
          </h2>
          <p className="text-base sm:text-lg font-medium max-w-2xl mx-auto" style={{ color: COLORS.gray }}>
            Comentários reais de pessoas que transformaram sua vida financeira com a Planilha Finança Simples
          </p>
        </motion.div>

        {/* Comments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {comments.map((comment, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-opacity-50 transition-all shadow-sm hover:shadow-md group"
            >
              {/* Header with avatar and name */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-2xl flex-shrink-0">
                  {comment.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <a
                      href={`https://instagram.com/${comment.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base hover:opacity-70 transition-opacity"
                      style={{ color: COLORS.dark }}
                    >
                      {comment.author}
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm font-medium" style={{ color: COLORS.gray }}>
                    @{comment.handle} • {comment.timestamp}
                  </p>
                </div>

                {/* Logo */}
                <div className="text-xl flex-shrink-0">📸</div>
              </div>

              {/* Comment text */}
              <p className="text-sm sm:text-base leading-relaxed mb-4 text-gray-700 line-clamp-4">
                {comment.text}
              </p>

              {/* Engagement */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200 text-xs font-medium" style={{ color: COLORS.gray }}>
                <button className="hover:opacity-70 transition-opacity flex items-center gap-1.5">
                  ❤️ {comment.likes}
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  💬 Responder
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 sm:mt-20"
        >
          <a
            href={`https://instagram.com/helder.financas`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-black text-white transition-all hover:shadow-lg"
            style={{
              backgroundColor: COLORS.primary,
            }}
          >
            Ver mais comentários no Instagram →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
