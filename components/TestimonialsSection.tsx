import React from 'react';
import { motion } from 'framer-motion';
import { YellowStar } from './Doodles';
import { ExternalLink, Star, MapPin } from 'lucide-react';

const reviews = [
  {
    name: "Huzaifa Advani",
    location: "MACHS Branch",
    content: "Dr. Zeeshan is truly an exceptional and highly skilled dentist. His behavior, professionalism, and the quality of his work are unmatched—you rarely find someone like him. His team at Smile Impact Dental Clinic is also very supportive.",
    stars: 5,
    initials: "HA",
    style: "beige",
    isNew: true
  },
  {
    name: "Mustafa Ashraf",
    location: "Central Branch",
    content: "Me and my wife both got dental work done from Dr Zeeshan while we were on vacation from the states. Dr Zeeshan’s knowledge, bedside manner, and skill in procedures is impeccable. On top of that, his fees were very reasonable.",
    stars: 5,
    initials: "MA",
    style: "white",
    isNew: true
  },
  {
    name: "Mariam Haqqani",
    location: "Mohammad Ali Society",
    content: "I got two of my wisdom teeth extracted from here. I was nervous but Dr. Zeeshan and his staff were very kind and helpful and helped me get through it easily and were very patient with me. The place is very homely and cosy too.",
    stars: 5,
    initials: "MH",
    style: "beige",
    isNew: true
  },
  {
    name: "Firoza Abid",
    location: "Canada / DHA",
    content: "I came from Canada for my dental procedure. It was a lengthy procedure including bone grafting and implants. Dr did a great job; he knows his work very well. Extremely professional.",
    stars: 5,
    initials: "FA",
    style: "white"
  }
];

const TestimonialsSection: React.FC = () => {
  const googleReviewsUrl = "https://www.google.com/maps/place/Smile+Impact+(Dental+Clinic)/@24.7994245,67.0457583,15z/data=!4m18!1m9!3m8!1s0x3eb33d7be4c0bbe3:0x3887cca38d6de7f1!2sSmile+Impact+(Dental+Clinic)!8m2!3d24.7994876!4d67.0458185!9m1!1b1!16s%2Fg%2F11sg5qt45d!3m7!1s0x3eb33d7be4c0bbe3:0x3887cca38d6de7f1!8m2!3d24.7994876!4d67.0458185!9m1!1b1!16s%2Fg%2F11sg5qt45d?entry=ttu";

  return (
    <section id="reviews" className="w-full bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-xs">Patient Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary-700 mt-4 tracking-tighter uppercase">
            PATIENT <br/>EXPERIENCES.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            Recent verified feedback from patients at our DHA Phase 5 and Central (MACHS) locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[40px] flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                review.style === 'beige' ? 'bg-beige-100' : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {index === 0 && <YellowStar className="absolute top-8 right-8 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity" />}
              {review.isNew && (
                <div className="absolute top-8 right-8 flex items-center gap-1 bg-primary-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                  <Star size={8} fill="currentColor" /> New Review
                </div>
              )}

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#006D77" className="text-primary-600" />
                  ))}
                </div>
                <p className="text-primary-900 text-lg leading-relaxed font-medium mb-8 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm ${
                  review.style === 'beige' ? 'bg-white text-primary-700' : 'bg-primary-50 text-primary-700'
                }`}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-black text-gray-900 leading-none">{review.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={8} className="text-primary-500" />
                    <p className="text-[10px] text-primary-500 font-bold uppercase tracking-widest">{review.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-10 py-6 bg-darkgray text-white rounded-[24px] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-primary-600 transition-all"
          >
            See All Google Reviews <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;