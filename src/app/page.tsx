"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Clock,
  Material,
  Mesh,
  NormalBufferAttributes,
  Vector3,
} from "three";

// Fonts
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Components
import { Button } from "./components";
import { useRef } from "react";

function HomeCanvas() {
  const clock = new Clock(true);

  const firstTorusRef = useRef<Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[]
  > | null>(null);
  const secondTorusRef = useRef<Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material
  > | null>(null);

  useFrame((_, delta) => {
    const movingDirection = Math.sin(clock.getElapsedTime() / 4);

    if (firstTorusRef.current) {
      firstTorusRef.current.position.x += (delta * movingDirection) / 10;
      firstTorusRef.current.position.y += (delta * movingDirection) / 10;
    }

    if (secondTorusRef.current) {
      secondTorusRef.current.position.y += (delta * movingDirection) / 10;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        intensity={0.7}
        color={"#ffffff"}
        position={[-10, 10, 0]}
      />
      <mesh
        ref={firstTorusRef}
        rotation={[Math.PI / -7, Math.PI / -15, 0]}
        position={new Vector3(-3.5, 1.5, 0)}
      >
        <torusGeometry args={[1.5, 0.4, 16, 100, 10]} />
        <meshPhongMaterial
          shininess={100}
          color={"#50C8E2"}
          emissive={"#000000"}
          specular={"#111111"}
        />
      </mesh>
      <mesh
        ref={secondTorusRef}
        rotation={[Math.PI / -7, Math.PI / 15, 0]}
        position={new Vector3(3.5, -1.5, 0)}
      >
        <torusGeometry args={[1, 0.3, 16, 100, 10]} />
        <meshPhongMaterial
          shininess={100}
          color={"#5c5c5c"}
          emissive={"#000000"}
          specular={"#111111"}
        />
      </mesh>
    </>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full">
      <div className="z-0 absolute left-0 top-0 bottom-0 right-0 w-screen h-screen">
        <Canvas>
          <HomeCanvas />
        </Canvas>
      </div>
      <div className="z-10 flex flex-col justify-center items-center mb-28">
        <h1 className="text-8xl shadow-text m-8">HEY, I&apos;M KAAN</h1>
        <h2
          className={`${urbanist.className} font-thin text-2xl tracking-[.25em] hover:tracking-[.5em] transition-all`}
        >
          FULL STACK DEVELOPER
        </h2>
      </div>
      <div className="z-10 flex justify-center items-center gap-x-40">
        <Button
          text="my works?"
          click={() => {
            // TODO: Navigate to projects page
          }}
        />
        <a
          href="/about-me"
          className="text-3xl font-thin hover:text-primary transition ease-in underline"
        >
          about me
        </a>
      </div>
    </section>
  );
}
