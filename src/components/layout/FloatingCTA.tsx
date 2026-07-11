import { Link } from "wouter";
import { Calendar } from "lucide-react";

export function FloatingCTA() {
  return (
    <Link href="/appointment">
      <button className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center transform transition-transform hover:scale-105 group">
        <Calendar size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-3 font-medium">
          Book Appointment
        </span>
      </button>
    </Link>
  );
}
