"use client";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SidebarNav, { CategoryId } from "@/components/SidebarNav";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("tech");
  const handleCategoryChange = (newCat: CategoryId) => {
    setActiveCategory(newCat);
    // Re-seed both heading and paragraph so text updates immediately
    // setHeadingSeed((prev) => prev + 1);
    // setParagraphSeed((prev) => prev + 1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-950 flex">
        {/* Left Side Panel */}
        <SidebarNav
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        {/* Center & Right Blog Content */}
        <main className="flex-1 p-8">
          {/* Blog Card with dynamic category heading & paragraphs */}
        </main>
      </div>
      <Footer />
      <FloatingDock />
    </>
  );
}
