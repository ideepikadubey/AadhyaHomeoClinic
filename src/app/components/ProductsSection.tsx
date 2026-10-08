import { useState } from "react";
import {
  Sparkles,
  ShoppingBag,
  Eye,
  X,
  CheckCircle2,
  Star,
  MessageCircle,
  ShieldCheck,
  Leaf,
  Clock,
  ArrowRight,
  Filter,
} from "lucide-react";

import allPurposeCreamImg from "@/assets/All Purpose Cream.PNG";
import faceGelImg from "@/assets/Face Gel.PNG";
import faceScrubImg from "@/assets/FaceScrub.PNG";
import hairDropsImg from "@/assets/Hair Drops.PNG";
import hairOilImg from "@/assets/Hair Oil.PNG";
import hairSprayImg from "@/assets/Hair Spray.PNG";
import painOilImg from "@/assets/Pain Oil.PNG";
import underEyeGelImg from "@/assets/Under Eye Gel.PNG";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  volume: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  keyIngredients: string[];
  dosage: string;
  suitability: string;
}

const products: Product[] = [
  {
    id: "aadhya-hair-spray",
    name: "Aadhya Hair Spray",
    category: "Hair Care",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewsCount: 148,
    image: hairSprayImg,
    tag: "Everyday Care",
    volume: "60 ml",
    shortDescription: "Complete care for everyday hair with a light herbal formula for hair fall reduction and scalp vitality.",
    fullDescription: "Aadhya Hair Spray provides complete everyday hair care with a lightweight, non-sticky herbal formula. Specially crafted to reduce hair fall, support healthy hair growth, and promote scalp health with a clean, non-greasy feel.",
    keyBenefits: [
      "Lightweight & Non-Sticky: Light herbal formula with a non-greasy feel",
      "Supports Healthy Hair: Helps reduce hair fall & supports healthy hair growth",
      "Promotes active scalp health and root nourishment",
      "Perfect for Daily Use: Suitable for everyday use and all hair types",
      "Gentle, effective, and 100% natural formulation",
    ],
    keyIngredients: ["Herbal Scalp Vitalizing Extracts", "Natural Hair Growth Stimulants", "Gentle Botanical Conditioning Base"],
    dosage: "Step 1: Spray evenly and directly onto the scalp. Step 2: Gently massage using fingertips for even absorption. Step 3: Leave on without rinsing. Use twice daily (morning & night). Shake well before use. For external use only.",
    suitability: "Suitable for everyday use and all hair types.",
  },
  {
    id: "aadhya-hair-oil",
    name: "Aadhya Hair Oil",
    category: "Hair Care",
    price: 349,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 195,
    image: hairOilImg,
    tag: "Bestseller",
    volume: "100 ml",
    shortDescription: "Complete care for healthier, stronger hair — promotes hair growth, reduces hair fall, and adds shine.",
    fullDescription: "Aadhya Hair Oil delivers complete therapeutic care for healthier, stronger hair. It deeply nourishes dormant hair follicles, combats chronic hair fall, improves strand thickness, and adds vibrant natural shine.",
    keyBenefits: [
      "Helps promote hair growth and root strengthening",
      "Helps reduce persistent hair fall and breakage",
      "Helps improve overall hair thickness and density",
      "Adds natural lustrous shine and softness to hair",
      "100% natural, gentle, and effective botanical blend",
    ],
    keyIngredients: ["Arnica Montana Extract", "Jaborandi Herbal Infusion", "Pure Botanical Carrier & Essential Oils"],
    dosage: "Step 1: Take sufficient amount of oil. Step 2: Apply on scalp with fingertips. Step 3: Massage gently and leave it for best results. Step 4: Use regularly for healthy, strong hair. Shake well before use. For external use only.",
    suitability: "Ideal for hair fall, thinning hair, dry scalp, and strengthening.",
  },
  {
    id: "aadhya-hair-drops",
    name: "Aadhya Hair Drops",
    category: "Hair Care",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewsCount: 162,
    image: hairDropsImg,
    tag: "Follicle Booster",
    volume: "30 ml",
    shortDescription: "Complete therapeutic oral & topical drops to reduce intense hair fall, premature greying, and strengthen roots.",
    fullDescription: "Aadhya Hair Drops is a specialized homoeopathic formulation designed to address deep-rooted causes of severe hair loss, scalp thinning, and premature greying. It provides vital nourishment directly to hair follicles to stimulate thick, healthy hair regrowth.",
    keyBenefits: [
      "Targets root causes of severe hair fall & alopecia",
      "Helps arrest premature greying of hair",
      "Strengthens weakened roots and activates dormant follicles",
      "Improves scalp micro-circulation & follicle health",
      "100% natural, safe, with zero side effects",
    ],
    keyIngredients: ["Wiesbaden", "Jaborandi Q", "Arnica Montana", "Ceanothus"],
    dosage: "10-15 drops in 1/4th cup of water twice daily before meals, or as directed by the physician. Shake well before use.",
    suitability: "Indicated for hair thinning, chronic hair loss, dandruff, and premature greying.",
  },
  {
    id: "aadhya-pain-oil",
    name: "Aadhya Pain Oil",
    category: "Therapeutic & Medicated",
    price: 320,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 184,
    image: painOilImg,
    tag: "Fast Relief",
    volume: "60 ml",
    shortDescription: "Complete care for joint pain, muscle stiffness, backache, and arthritis — fast absorbing & soothing relief.",
    fullDescription: "Aadhya Pain Oil is a potent herbal homoeopathic formulation for fast and lasting relief from joint pain, arthritis, sciatica, spondylitis, muscle stiffness, sprains, and backache. It penetrates deep into tissues to reduce inflammation and restore mobility.",
    keyBenefits: [
      "Fast-acting relief from joint & muscular pain",
      "Reduces stiffness, swelling, and joint inflammation",
      "Effective for Arthritis, Sciatica, Spondylitis, and Sprains",
      "Deep penetrating herbal formulation for long-lasting comfort",
      "Non-sticky, gentle on skin, and 100% natural",
    ],
    keyIngredients: ["Rhus Tox", "Arnica Montana", "Gaultheria Oil", "Belladonna", "Camphora"],
    dosage: "Take a few drops of oil and gently massage on the affected area 2-3 times daily. Keep area warm for best results. For external use only.",
    suitability: "Ideal for knee pain, shoulder stiffness, lower back pain, arthritis, and sports injuries.",
  },
  {
    id: "aadhya-under-eye-gel",
    name: "Aadhya Under Eye Gel",
    category: "Skin Care",
    price: 250,
    originalPrice: 350,
    rating: 4.8,
    reviewsCount: 132,
    image: underEyeGelImg,
    tag: "Radiant Eyes",
    volume: "20 g",
    shortDescription: "Complete care for fresh, hydrated & radiant under eyes — reduces dark circles and de-puffs tired eyes.",
    fullDescription: "Aadhya Under Eye Gel is specially formulated for the delicate periorbital skin. It rapidly hydrates, soothes, and refreshes tired eyes while reducing stubborn dark circles, under-eye puffiness, and fine dryness lines.",
    keyBenefits: [
      "Reduces dark circles & under-eye shadows",
      "Hydrates & deeply moisturizes delicate eye contours",
      "Soothes & refreshes fatigued, screen-strained eyes",
      "Brightens under-eye skin for a well-rested look",
      "De-puffs eyes and eases morning eye bags",
    ],
    keyIngredients: ["Cucumber & Daisy Floral Extracts", "Aloe Hydration Gel Matrix", "Euphrasia Herbal Actives"],
    dosage: "Step 1: Cleanse face thoroughly and pat dry. Step 2: Place small, pea-sized dots of gel around eye contours. Step 3: Gently tap with ring finger until fully absorbed (do not rub). Step 4: Use twice daily (morning & night). Caution: Avoid direct contact with eyes.",
    suitability: "Suitable for all skin types, screen workers, and dark circle care.",
  },
  {
    id: "aadhya-all-purpose-cream",
    name: "Aadhya All Purpose Cream",
    category: "Skin Care",
    price: 220,
    originalPrice: 299,
    rating: 4.9,
    reviewsCount: 164,
    image: allPurposeCreamImg,
    tag: "Multi-Purpose",
    volume: "50 g",
    shortDescription: "Complete care for healthy, soft & nourished skin — helps heal cracked heels, moisturizes, and soothes itching.",
    fullDescription: "A rich therapeutic cream formulated with Aloe Vera, Berberis Aquifolium, Calendula, and Silicea. Restores moisture balance to dry, rough skin, accelerates repair of cracked heels, and quickly calms irritation and redness.",
    keyBenefits: [
      "Deep moisture & nourishment for dry, flaky skin",
      "Helps heal cracked heels and rough elbows/hands",
      "Moisturizes and softens skin texture naturally",
      "Soothes itching, redness, and dermal irritation",
      "Gentle, effective, and 100% safe for daily family use",
    ],
    keyIngredients: ["Aloe Vera", "Berberis aquifolium", "Calendula", "Silicea"],
    dosage: "Step 1: Take sufficient amount of cream and apply all over body or affected parts. Step 2: Apply as per physician advice or twice daily after cleansing. For external use only.",
    suitability: "Recommended for dry skin, cracked heels, rough patches, and daily skin nourishment.",
  },
  {
    id: "aadhya-face-scrub",
    name: "Aadhya Face Scrub",
    category: "Skin Care",
    price: 280,
    originalPrice: 380,
    rating: 4.8,
    reviewsCount: 115,
    image: faceScrubImg,
    tag: "Exfoliating Care",
    volume: "50 g",
    shortDescription: "Complete care for smooth, glowing & refreshed skin — removes dead cells, unclogs pores, and revitalizes texture.",
    fullDescription: "Aadhya Face Scrub gently exfoliates dead skin buildup and environmental impurities without irritating the skin. Unclogs pores, refines skin texture, and leaves the skin feeling exceptionally smooth, fresh, and revitalized.",
    keyBenefits: [
      "Gently removes dead skin cells and surface impurities",
      "Smooths skin texture and softens rough areas",
      "Enhances natural glow and clear skin complexion",
      "Unclogs pores and prevents blackhead buildup",
      "Leaves skin feeling fresh, revitalized, and invigorated",
    ],
    keyIngredients: ["Gentle Botanical Micro-Exfoliants", "Nourishing Herbal Base", "Soothing Botanical Extracts"],
    dosage: "Step 1 (Wet): Wet face with warm water. Step 2 (Massage): Take small amount on fingertips and gently massage in circular motions (avoid eye area). Step 3 (Rinse): Rinse thoroughly with water & pat dry. Step 4 (Frequency): Use 2-3 times a week. Caution: For external use only. Avoid contact with eyes.",
    suitability: "Suitable for all skin types seeking gentle exfoliation and luminous smoothness.",
  },
  {
    id: "aadhya-face-gel",
    name: "Aadhya Face Gel",
    category: "Skin Care",
    price: 290,
    originalPrice: 390,
    rating: 4.9,
    reviewsCount: 156,
    image: faceGelImg,
    tag: "Radiance & Clarity",
    volume: "50 g",
    shortDescription: "Complete care for brighter, smoother & radiant skin — reduces dark spots, evens tone, and protects against stressors.",
    fullDescription: "A light, cooling face gel infused with Aloe Vera, Berberis Aquifolium, Belladonna, and Sarsaparilla. It revitalizes dull complexion, fades dark spots and blemishes, evens out skin tone, and shields against environmental pollutants.",
    keyBenefits: [
      "Brightens dull skin and restores luminous glow",
      "Protects against environmental stressors & pollution",
      "Reduces dark spots, blemishes & hyperpigmentation",
      "Evens skin tone and smoothens skin surface",
      "Leaves skin fresh, supple, and radiant all day",
    ],
    keyIngredients: ["Aloe Vera", "Berberis Aquifolium", "Belladonna", "Sarsaparilla"],
    dosage: "Step 1 (Cleanse): Cleanse face and pat dry. Step 2 (Apply): Apply a thin, even layer over face and neck. Step 3 (Absorb): Gently tap with fingertips until fully absorbed. Step 4 (Frequency): Use regularly as directed for best results. Storage: Store in a cool, dry place away from direct sunlight.",
    suitability: "Ideal for dullness, dark spots, uneven skin tone, and daily lightweight skin hydration.",
  },
];

const categories = [
  "All Products",
  "Hair Care",
  "Skin Care",
  "Therapeutic & Medicated",
];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Products" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyBenefits.some((b) =>
        b.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppOrderUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Dr. Mayur Mishra,\n\nI am interested in purchasing/inquiring about the product:\n*${product.name}* (${product.volume})\nPrice: ₹${product.price}\n\nPlease let me know how to proceed with the dosage consultation and home delivery.`
    );
    return `https://wa.me/917572946732?text=${text}`;
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Clinic Curated Remedies
          </div>

          <h2
            className="text-foreground mb-3 sm:mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            Authentic Homoeopathic <span className="text-primary italic font-normal">Formulations & Products</span>
          </h2>

          <p
            className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Handpicked, standardized, and clinically tested constitutional remedies curated by Dr. Mayur N. Mishra.
            Click on any product to view its complete description, active ingredients, dosage, and order online.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                    : "bg-card text-foreground/80 border-border hover:border-primary/40 hover:text-foreground"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-64 relative flex-shrink-0">
            <input
              type="text"
              placeholder="Search products or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-9 rounded-full bg-card border border-border text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <Filter className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Products Grid (12 Products) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-muted/40 rounded-3xl border border-dashed border-border">
            <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
            <p className="text-base font-semibold text-foreground">No products found</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Products");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-card rounded-2xl border border-border hover:border-primary/40 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
              >
                {/* Product Image Container */}
                <div className="relative w-full h-56 sm:h-60 bg-white overflow-hidden flex items-center justify-center p-3.5 border-b border-border/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wide uppercase shadow-sm">
                      {product.tag}
                    </span>
                  )}

                  {/* Volume pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20 shadow-xs">
                    {product.volume}
                  </span>

                  {/* Rating on Image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-md text-white text-[11px] font-medium border border-white/20 shadow-xs">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-white/70 text-[10px]">({product.reviewsCount})</span>
                  </div>

                  {/* Hover Quick Action Badge */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md">
                      <Eye className="w-3 h-3" /> View Details
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category */}
                    <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Leaf className="w-3 h-3" />
                      {product.category}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-foreground font-bold text-sm sm:text-base leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p
                      className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-border flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-foreground">
                          ₹{product.price}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-semibold">
                        {Math.round(
                          ((product.originalPrice - product.price) / product.originalPrice) * 100
                        )}
                        % OFF
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Assurance Band */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-secondary/40 border border-border grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">100% Doctor Certified</h4>
              <p className="text-xs text-muted-foreground">Standardized authentic homoeopathic potencies</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Natural & Zero Side Effects</h4>
              <p className="text-xs text-muted-foreground">Safe for long-term therapeutic application</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Doctor Consultation on WhatsApp</h4>
              <p className="text-xs text-muted-foreground">Get dosage confirmation before dispatch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-card w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-border overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh] p-5 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Left Column: Image & Highlights */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-white border border-border/80 p-4 flex items-center justify-center shadow-xs">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain"
                    />
                    {selectedProduct.tag && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase shadow-sm">
                        {selectedProduct.tag}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-xs">
                      Volume: {selectedProduct.volume}
                    </span>
                  </div>

                  {/* Rating & Review Counter */}
                  <div className="p-3.5 rounded-2xl bg-secondary/50 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-sm text-foreground">{selectedProduct.rating} / 5.0</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({selectedProduct.reviewsCount} verified patients)</span>
                  </div>

                  {/* Quick Price Banner */}
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">Clinic Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-emerald-900 dark:text-emerald-100">
                          ₹{selectedProduct.price}
                        </span>
                        <span className="text-sm text-emerald-700/60 dark:text-emerald-400/60 line-through">
                          ₹{selectedProduct.originalPrice}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs">
                      Save ₹{selectedProduct.originalPrice - selectedProduct.price}
                    </span>
                  </div>
                </div>

                {/* Right Column: Full Details */}
                <div className="md:col-span-7 flex flex-col gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1.5">
                      <Leaf className="w-3.5 h-3.5" />
                      {selectedProduct.category}
                    </div>
                    <h3
                      className="text-foreground font-bold text-xl sm:text-2xl leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {selectedProduct.name}
                    </h3>
                  </div>

                  {/* Full Description */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Product Overview
                    </h4>
                    <p
                      className="text-foreground/90 text-xs sm:text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {selectedProduct.fullDescription}
                    </p>
                  </div>

                  {/* Key Benefits List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Clinical Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProduct.keyBenefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ingredients & Dosage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary mb-1">
                        <Leaf className="w-3.5 h-3.5" /> Key Potencies
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {selectedProduct.keyIngredients.map((ing, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-card border border-border text-[11px] font-medium text-foreground"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary mb-1">
                        <Clock className="w-3.5 h-3.5" /> Suggested Dosage
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {selectedProduct.dosage}
                      </p>
                    </div>
                  </div>

                  {/* Suitability Note */}
                  <div className="text-[11px] text-muted-foreground bg-muted p-3 rounded-xl border border-border">
                    <span className="font-semibold text-foreground">Doctor Note: </span>
                    {selectedProduct.suitability} For tailored constitutional treatment, consultation is recommended.
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={getWhatsAppOrderUrl(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      Order / Inquire on WhatsApp
                    </a>

                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="py-3 px-5 rounded-full border border-border hover:bg-secondary text-foreground text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
