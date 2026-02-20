import { modalContentData } from '../data/modalContent'

export default function Modal({ isOpen, onClose, contentKey }) {
  if (!isOpen || !contentKey) return null

  const content = modalContentData[contentKey]
  if (!content) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="modal-backdrop absolute inset-0" onClick={onClose}></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-300/20 shadow-2xl">
          <div className="sticky top-0 bg-gradient-to-r from-purple-900 to-rose-500 p-4 sm:p-6 border-b flex items-center justify-between">
            <h3 className="cinzel text-lg sm:text-2xl font-bold text-white">{content.title}</h3>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 sm:p-8 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed prose prose-sm sm:prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          </div>
        </div>
      </div>
    </div>
  )
}