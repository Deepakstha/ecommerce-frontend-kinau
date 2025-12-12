import { useState } from "react";
import { Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function ProductReviewPage() {
  const [reviews, setReviews] = useState([
    { name: "Alice", rating: 5, comment: "Amazing product!" },
    { name: "Bob", rating: 4, comment: "Very good but a bit expensive." },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || formData.rating === 0) return;
    setReviews([...reviews, formData]);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Product"
          className="rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Fitness Tracker Watch</h2>
        <StarRating rating={4} />
        <p className="text-gray-600 mt-2">
          This watch helps you track your workouts, sleep, and heart rate with
          style.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        {reviews.map((r, index) => (
          <div key={index} className="border-b py-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{r.name}</span>
              <StarRating rating={r.rating} />
            </div>
            <p className="text-gray-700 mt-1">{r.comment}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <textarea
            placeholder="Your Review"
            className="w-full border px-4 py-2 rounded"
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                onClick={() => setFormData({ ...formData, rating: num })}
                className={`cursor-pointer ${
                  formData.rating >= num
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
