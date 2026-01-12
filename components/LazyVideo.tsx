import React, { useEffect, useRef, useState } from 'react';

export interface LazyVideoProps {
  src: string;
  poster?: string;
  containerClassName?: string;
  videoClassName?: string;
  title?: string;
  useFirstFramePreview?: boolean;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  containerClassName,
  videoClassName,
  title,
  useFirstFramePreview = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shouldLoadVideo = isInView;
  const shouldShowPreviewVideo = useFirstFramePreview && shouldLoadVideo;
  const shouldShowImagePoster = !useFirstFramePreview;

  const handlePlay = async () => {
    setIsPlaying(true);
    try {
      await videoRef.current?.play();
    } catch {
      // Some browsers may block play() until user gesture is fully recognized.
      // The controls remain visible so the user can start playback manually.
    }
  };

  return (
    <div ref={containerRef} className={containerClassName}>
      <div className="relative w-full h-full">
        {!isReady && (
          <div className="absolute inset-0 bg-black/40 animate-pulse" aria-hidden="true" />
        )}

        {shouldShowImagePoster && !isPlaying && (
          poster ? (
            <img
              src={poster}
              alt={title ?? 'Video preview'}
              className={videoClassName ?? 'w-full h-full object-cover'}
              loading="lazy"
              decoding="async"
              onLoad={() => setIsReady(true)}
            />
          ) : (
            <div className="w-full h-full bg-black/60" />
          )
        )}

        {(shouldShowPreviewVideo || isPlaying) && (
          <video
            ref={videoRef}
            className={videoClassName ?? 'w-full h-full object-cover'}
            src={shouldLoadVideo ? src : undefined}
            poster={poster}
            controls={isPlaying}
            autoPlay={isPlaying}
            muted={false}
            playsInline
            preload="metadata"
            onLoadedMetadata={() => setIsReady(true)}
            onLoadedData={() => setIsReady(true)}
            onCanPlay={() => setIsReady(true)}
          />
        )}

        {!isPlaying && (
          <button
            type="button"
            aria-label={title ? `Play ${title}` : 'Play video'}
            onClick={handlePlay}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center group-hover:bg-[#a5b4fc] group-hover:scale-110 transition-all shadow-2xl border border-white/30">
                <svg className="w-8 h-8 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default LazyVideo;
