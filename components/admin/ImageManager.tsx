"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Props {
  initialImages: string[];
  fieldName?: string;
}

export default function ImageManager({ initialImages, fieldName = "images" }: Props) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (json.url) setImages((prev) => [...prev, json.url]);
      else alert(json.error ?? "Upload failed");
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const remove = (i: number) => setImages((prev) => prev.filter((_, j) => j !== i));
  const moveLeft = (i: number) => {
    if (i === 0) return;
    setImages((prev) => {
      const arr = [...prev];
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      return arr;
    });
  };
  const moveRight = (i: number) => {
    setImages((prev) => {
      if (i >= prev.length - 1) return prev;
      const arr = [...prev];
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      return arr;
    });
  };

  return (
    <div>
      {images.map((url) => (
        <input key={url} type="hidden" name={fieldName} value={url} />
      ))}

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {images.map((url, i) => (
            <div key={url + i} className="relative aspect-[4/3] bg-linen rounded overflow-hidden group">
              <Image src={url} alt={`Image ${i + 1}`} fill className="object-cover" sizes="200px" />
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/40 transition-colors flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                <button type="button" onClick={() => moveLeft(i)} className="w-7 h-7 bg-white/80 text-bark text-xs rounded flex items-center justify-center hover:bg-white">←</button>
                <button type="button" onClick={() => remove(i)} className="w-7 h-7 bg-terracotta text-off-white text-xs rounded flex items-center justify-center hover:bg-clay">×</button>
                <button type="button" onClick={() => moveRight(i)} className="w-7 h-7 bg-white/80 text-bark text-xs rounded flex items-center justify-center hover:bg-white">→</button>
              </div>
              <span className="absolute bottom-1 left-1 text-[0.55rem] text-off-white/70 bg-bark/60 px-1 rounded">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      <label className="inline-flex items-center gap-2 px-4 py-2 border border-sand text-stone text-sm rounded cursor-pointer hover:bg-linen transition-colors">
        {uploading ? "Uploading…" : "+ Add image"}
        <input ref={inputRef} type="file" accept="image/*" onChange={upload} className="hidden" disabled={uploading} />
      </label>
      {images.length === 0 && (
        <p className="mt-2 text-xs text-stone/60">No images yet. Upload the first one above.</p>
      )}
    </div>
  );
}
