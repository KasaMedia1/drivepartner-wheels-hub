import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card overflow-hidden">
      {review.image && (
        <img
          src={review.image}
          alt={review.bikeName}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3">
          <img
            src={review.avatar}
            alt={review.name}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-heading text-sm font-semibold">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.bikeName}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating ? "fill-kinetic text-kinetic" : "text-border"
              }`}
            />
          ))}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          „{review.text}"
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
