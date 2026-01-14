import Image from "next/image";

export default function AuthSidebar() {
  return (
          <div className="relative hidden lg:block">
            <Image
              src="/cta-bg.jpg"
              alt="Testimonial"
              fill
              className="object-cover"
              priority
            />
    
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />
    
            {/* Logo */}
            <div className="absolute top-6 left-6 z-20 text-white font-semibold text-lg">
              Nucleus
            </div>
    
            {/* Quote */}
            <div className="absolute bottom-10 left-8 right-8 z-20 text-white">
              <p className="text-2xl font-semibold leading-snug">
                “Simply all the tools that my team and I need.”
              </p>
              <p className="mt-4 text-sm opacity-90">
                Karen Yue <br />
                <span className="opacity-75">
                  Director of Digital Marketing Technology
                </span>
              </p>
            </div>
          </div>
  );
}