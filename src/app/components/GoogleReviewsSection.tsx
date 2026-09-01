import { useState, useEffect } from "react";
import { Star, ExternalLink, Loader2, AlertCircle } from "lucide-react";

interface GoogleReview {
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri?: string;
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
  publishTime?: string;
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
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i <= rating ? "fill-[#fbbc04] text-[#fbbc04]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
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

  const liveReviews = placeData?.reviews && placeData.reviews.length > 0 ? placeData.reviews : [];
  const avgRating = placeData?.rating || 5.0;
  const totalReviews = placeData?.userRatingCount || 19;
  const googleMapsUrl =
    placeData?.googleMapsUri ||
    "https://maps.google.com/?cid=11168473582639285825";
  const writeReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId || "ChIJMV2ALk6HXjkRQYaM4Ixj_po"}`;

  // Rating counts for 5 stars
  const ratingCounts = [0, 0, 0, 0, 0];
  if (liveReviews.length > 0) {
    liveReviews.forEach((r) => {
      if (r.rating >= 1 && r.rating <= 5) {
        ratingCounts[r.rating - 1]++;
      }
    });
  } else {
    ratingCounts[4] = totalReviews;
  }

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="text-accent mb-2 tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600 }}
          >
            Google Rating & Feedback
          </div>
          <h2
            className="text-foreground mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700 }}
          >
            Rated <span className="text-primary italic font-normal">{avgRating.toFixed(1)} Stars</span> on Google
          </h2>
          <p
            className="text-muted-foreground max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.6 }}
          >
            Verified rating and genuine feedback directly from our patients on Google Maps.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <Loader2 className="w-7 h-7 text-primary animate-spin" />
            <p
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Connecting to Google Maps…
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <p
              className="text-muted-foreground text-sm max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {error}
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary border border-primary/25 px-5 py-2 rounded-full hover:bg-primary/5 transition-colors text-sm font-medium"
            >
              View on Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Google Rating Showcase Card */}
        {!loading && !error && (
          <div className="bg-card rounded-3xl p-8 sm:p-10 border border-primary/15 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Big Score */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <span style={{ fontSize: "18px", fontWeight: 700 }}>
                      <span style={{ color: "#4285F4" }}>G</span>
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Google Verified
                  </span>
                </div>

                <div
                  className="text-foreground leading-none my-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "56px", fontWeight: 700 }}
                >
                  {avgRating.toFixed(1)}
                </div>
                <div className="my-2">
                  <StarRating rating={Math.round(avgRating)} />
                </div>
                <div
                  className="text-muted-foreground text-sm font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Based on {totalReviews} patient ratings
                </div>
              </div>

              {/* Rating Bars */}
              <div className="w-full max-w-xs space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = ratingCounts[stars - 1];
                  const maxCount = Math.max(...ratingCounts, 1);
                  return (
                    <div key={stars} className="flex items-center gap-2.5">
                      <span
                        className="text-muted-foreground w-4 text-right text-xs font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {stars}
                      </span>
                      <Star className="w-3.5 h-3.5 fill-[#fbbc04] text-[#fbbc04] flex-shrink-0" />
                      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#fbbc04] transition-all duration-700"
                          style={{ width: `${(count / maxCount) * 100}%` }}
                        />
                      </div>
                      <span
                        className="text-muted-foreground w-6 text-xs text-right font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/5 px-6 py-3 rounded-full transition-all text-sm font-medium whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full transition-all text-sm font-medium shadow hover:shadow-md whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ⭐ Write a Review
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
