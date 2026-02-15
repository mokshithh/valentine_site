import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Hello Kitty background images */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/j7TcuX4I8WYnGDAUXYan6J/sandbox/kRf6kbWGur5XY9fqaCEgrV-img-1_1771134999000_na1fn_aGVsbG8ta2l0dHktYmctMQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajdUY3VYNEk4V1luR0RBVVhZYW42Si9zYW5kYm94L2tSZjZrYldHdXI1WFk5ZnFhQ0VnclYtaW1nLTFfMTc3MTEzNDk5OTAwMF9uYTFmbl9hR1ZzYkc4dGEybDBkSGt0WW1jdE1RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=egXgZ49ldK7ptAFJyKZtLhUqI3lET57lVR7pVo~HzIaVpSKU3hp9iiBf-rGVzeenALfjg~2BTsvTtSJtsQzBLXYcirvBLYjzQc4bu1LAKqW2gBOQKl-L6fw9Xb92tXN4YgBeViOIPx-4vpVVvtcVw0wBORXQ4MH8~JAEj9oKE5KbDr7gpGriNnIYCJBg97z7nDe2M5~xu5a-jH9SdSKQmSftFKnkYgHjcrXaFfRy0MOxWXdZcHi4ON46wSZo~gRNrxYV2oUBee6cu60IOeac69TTXptGIg8ibSZgkCt7uZVMP7jsImJNwE8pDt9NI2xZjGY-FKfG1apehEfsAJXIJQ__"
          alt="Hello Kitty"
          className="absolute w-48 h-48 object-cover rounded-full top-10 left-10"
        />
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/j7TcuX4I8WYnGDAUXYan6J/sandbox/kRf6kbWGur5XY9fqaCEgrV-img-3_1771135000000_na1fn_aGVsbG8ta2l0dHktYmctMw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajdUY3VYNEk4V1luR0RBVVhZYW42Si9zYW5kYm94L2tSZjZrYldHdXI1WFk5ZnFhQ0VnclYtaW1nLTNfMTc3MTEzNTAwMDAwMF9uYTFmbl9hR1ZzYkc4dGEybDBkSGt0WW1jdE13LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VaDmUv5ICE8rJvbcQHZkhEFOCbvEx9~vbT~LNnAsA8aduPwKCKd1CeenHJ7OLvm2uhXGqlRgtMCMRSn~ExMnYT3bdZlDNrUas8YqJwyWrHAIPs3CWqMF8EAiqpLKtolGnq3-LNMyGIeQO5Zfi4jWMRAtndGcXJKWU3evHcNjxk6dhj4odro7GN3waEOuT5eb1cURui~d9VPadUhdzYRydor9Q-2DztkMCT2Ud1alajvSwAaIq8bT1hf1vOCH~Qye55G1HMkMjAZLgcrxd1g5WT8Qg3Vj~fPdLNh4nBIyHRy-Szrqcpa82wVm4UGaaiw2LRgSJOCqe0sAO3GXW5V~lQ__"
          alt="Hello Kitty"
          className="absolute w-40 h-40 object-cover rounded-full bottom-20 right-10"
        />
      </div>
      <div className="text-center max-w-2xl relative z-10">
        {/* Animated hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + i}s ease-in-out infinite`,
              }}
            >
              <Heart className="w-8 h-8 text-pink-300 fill-pink-300" />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-pink-600 mb-4">
            For: Rb 🦇
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Ready to play some games and find out something special?
          </p>

          <p className="text-lg text-gray-600 mb-12">
            Complete all three challenges to unlock the final surprise! 💕
          </p>

          <Button
            onClick={onStart}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Let's Play! 🎮
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
