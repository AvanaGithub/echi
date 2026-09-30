# Hero videos

Drop the final files here — the homepage picks them up automatically
(until then, the gradient placeholder shows):

| File | Used on | Spec |
|---|---|---|
| `hero-1.mp4` | Hero slide 1 — "Less knee pain. More movement." | 16:9, 1920×1080, H.264 MP4, 6–12s seamless loop, no audio track, target ≤ 6 MB |
| `hero-1.jpg` | Poster frame for slide 1 (shows while video loads) | 1920×1080 JPG/WebP |
| `hero-2.mp4` | Hero slide 2 — "A new era of regeneration" | same as hero-1.mp4 |
| `hero-2.jpg` | Poster frame for slide 2 | 1920×1080 JPG/WebP |

Tips
- Export without an audio track (autoplay requires muted anyway; a silent track wastes bytes).
- Compress with HandBrake or `ffmpeg -crf 28` — hero videos should stay under ~6 MB for mobile.
- Keep important motion in the right half of the frame; the left half sits under the headline text and a dark gradient overlay.
