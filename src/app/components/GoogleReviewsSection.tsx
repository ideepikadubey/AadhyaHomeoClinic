import { useState, useEffect } from "react";
import { Star, ThumbsUp, ExternalLink, Loader2, AlertCircle } from "lucide-react";

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  rating: number;
  text?: {
    text: string;
    languageCode: string;
  };
  originalText?: {
    text: string;
    languageCode: string;
  };
  relativePublishTimeDescription: string;
  publishTime: string;
}

interface PlaceDetails {
  displayName?: { text: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
  googleMapsUri?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-[#fbbc04] text-[#fbbc04]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

const avatarColors = [
  "#123c24", "#10b981", "#059669", "#15803d", "#047857", "#064e3b",
  "#166534", "#14532d", "#052e16", "#0d9488",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function GoogleReviewsSection() {
  const [placeData, setPlaceData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

  useEffect(() => {
    async function fetchReviews() {
      if (!apiKey || !placeId) {
        setError("Google Places API key or Place ID is not configured.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/places/v1/places/${placeId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Goog-Api-Key": apiKey,
              "X-Goog-FieldMask":
                "displayName,rating,userRatingCount,reviews,googleMapsUri",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(
            errorData?.error?.message ||
              `API request failed with status ${response.status}`
          );
        }

        const data: PlaceDetails = await response.json();
        setPlaceData(data);
      } catch (err) {
        console.error("Failed to fetch Google reviews:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load reviews"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [apiKey, placeId]);

  const reviews = placeData?.reviews || [];
  const avgRating = placeData?.rating || 0;
  const totalReviews = placeData?.userRatingCount || 0;
  const googleMapsUrl =
    placeData?.googleMapsUri ||
    "https://www.google.com/maps/search/Aadhya+Homoeo+Clinic+Ahmedabad";

  // Compute rating distribution from actual reviews
  const ratingCounts = [0, 0, 0, 0, 0]; // index 0 = 1 star, index 4 = 5 stars
  reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) {
      ratingCounts[r.rating - 1]++;
    }
  });

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-accent mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}
          >
            Patient Reviews
          </div>
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}
          >
            What Patients Say on{" "}
            <span className="text-primary italic font-normal">Google</span>
          </h2>
          <p
            className="text-muted-foreground max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Real reviews from our patients on Google — genuine, verified experiences.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
            >
              Loading Google reviews…
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-destructive" />
            </div>
            <div>
              <p
                className="text-foreground font-medium mb-1"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
              >
                Unable to load reviews
              </p>
              <p
                className="text-muted-foreground max-w-md"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: 1.6 }}
              >
                {error}
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary border border-primary/25 px-5 py-2.5 rounded-full hover:bg-primary/5 transition-colors mt-2"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
            >
              View Reviews on Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Reviews Content */}
        {!loading && !error && reviews.length > 0 && (
          <>
            {/* Google Rating Summary Card */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-14">
              <div className="bg-card rounded-3xl p-8 border border-primary/10 flex flex-col sm:flex-row items-center gap-8 shadow-sm w-full max-w-2xl">
                {/* Big rating */}
                <div className="text-center flex-shrink-0">
                  <div
                    className="text-foreground leading-none mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "64px", fontWeight: 700 }}
                  >
                    {avgRating.toFixed(1)}
                  </div>
                  <StarRating rating={Math.round(avgRating)} />
                  <div
                    className="text-muted-foreground mt-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px" }}
                  >
                    {totalReviews} Google reviews
                  </div>
                </div>

                {/* Rating breakdown bars */}
                <div className="flex-1 w-full space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = ratingCounts[stars - 1];
                    const maxCount = Math.max(...ratingCounts, 1);
                    return (
                      <div key={stars} className="flex items-center gap-2">
                        <span
                          className="text-muted-foreground w-4 text-right flex-shrink-0"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                        >
                          {stars}
                        </span>
                        <Star className="w-3 h-3 fill-[#fbbc04] text-[#fbbc04] flex-shrink-0" />
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#fbbc04] transition-all duration-700"
                            style={{ width: `${(count / maxCount) * 100}%` }}
                          />
                        </div>
                        <span
                          className="text-muted-foreground w-6 flex-shrink-0"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                        >
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Google branding + CTA */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  {/* Google "G" logo */}
                  <div className="w-12 h-12 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center">
                    <span style={{ fontSize: "22px", fontWeight: 700, fontFamily: "sans-serif" }}>
                      <span style={{ color: "#4285F4" }}>G</span>
                    </span>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary border border-primary/25 px-4 py-2 rounded-full hover:bg-primary/5 transition-colors text-center whitespace-nowrap"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500 }}
                  >
                    View on Google
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review, i) => {
                const reviewText =
                  review.originalText?.text || review.text?.text || "";
                const initials = getInitials(review.authorAttribution.displayName);

                return (
                  <div
                    key={`${review.authorAttribution.displayName}-${i}`}
                    className="bg-card rounded-2xl p-5 border border-primary/10 hover:shadow-md transition-all animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Reviewer header */}
                    <div className="flex items-start gap-3 mb-3">
                      {review.authorAttribution.photoUri ? (
                        <img
                          src={review.authorAttribution.photoUri}
                          alt={review.authorAttribution.displayName}
                          className="w-10 h-10 rounded-full flex-shrink-0 object-cover"
                          onError={(e) => {
                            // If image fails to load, replace with initials
                            const target = e.currentTarget;
                            const parent = target.parentElement;
                            if (parent) {
                              const div = document.createElement("div");
                              div.className =
                                "w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm";
                              div.style.background =
                                avatarColors[i % avatarColors.length];
                              div.style.fontFamily = "'Inter', sans-serif";
                              div.textContent = initials;
                              parent.replaceChild(div, target);
                            }
                          }}
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm"
                          style={{
                            background: avatarColors[i % avatarColors.length],
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <a
                          href={review.authorAttribution.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium truncate block hover:text-primary transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px" }}
                        >
                          {review.authorAttribution.displayName}
                        </a>
                        <div
                          className="text-muted-foreground"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                        >
                          {review.relativePublishTimeDescription}
                        </div>
                      </div>
                      {/* Google G mark on card */}
                      <div className="ml-auto flex-shrink-0 w-6 h-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#4285F4" }}>G</span>
                      </div>
                    </div>

                    {/* Stars */}
                    <StarRating rating={review.rating} />

                    {/* Review text */}
                    {reviewText && (
                      <p
                        className="text-muted-foreground mt-3 mb-4 line-clamp-4"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: 1.7 }}
                      >
                        {reviewText}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Write a Review CTA */}
            <div className="text-center mt-12">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500 }}
              >
                ⭐ Write a Review on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </>
        )}

        {/* No reviews found */}
        {!loading && !error && reviews.length === 0 && (
          <div className="text-center py-16">
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
            >
              No reviews found. Be the first to review us!
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 mt-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500 }}
            >
              ⭐ Write a Review on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
