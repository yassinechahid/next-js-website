"use client";
import React, { useState } from "react";
import Image from "next/image";

import ActualitesCardBig from "../../components/ActualitesCardBig";

import { Articles } from "../../data/Articles";

import selected from "../../../public/assets/pictures/selected.svg";

// Available filter options
const filterOptions = [
  "Santé générale",
  "Technologies médicales",
  "Télémédecine",
];

export default function Blog() {
  const [activeFilters, setActiveFilters] = useState(["Santé générale"]);

  // Toggle filter selection
  const toggleFilter = (filter) => {
    setActiveFilters((prev) => prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  // Filter articles based on active filters
  const filteredArticles = activeFilters.length === 0 ? [] : Articles.filter((article) => article.categories.some((category) => activeFilters.includes(category)));

  return (
    <article className="flex px-5 bg-light-background justify-center pt-24">
      <main className="flex flex-col justify-center items-center w-[1040px] pb-28 gap-16 bg-light-background ">
        {/* Blog header section **fnfn */}
        <section className="flex lg:self-start flex-col gap-2 px-3 sm:px-14 md:px-32 lg:px-0">
          <span className="font-roboto font-normal text-headline-large text-light-primary">
            Blog
          </span>
          <span className="font-roboto font-normal text-body-large text-light-on-surface-variant">
            Découvrez nos derniers articles sur une variété de sujets dans notre
            blog !
          </span>
        </section>

        {/* Filter buttons section */}
        <section className="flex lg:self-start flex-wrap gap-4 px-3 sm:px-14 md:px-32 lg:px-0 lg:grid-cols-3">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`flex justify-center items-center text-nowrap px-4 gap-2 h-8 rounded-lg border-[1px] ${
                activeFilters.includes(filter)
                  ? "bg-light-secondary-container border-light-secondary-container text-light-on-secondary-container"
                  : "bg-light-background border-light-outline text-light-on-surface"
              }`}
            >
              {activeFilters.includes(filter) && (
                <Image src={selected} alt="coché" width={16} height={16} />
              )}
              {filter}
            </button>
          ))}
        </section>

        {/* Filtered articles section */}
        <section
          className={`grid grid-cols-1 justify-center items-center gap-6 lg:grid-cols-2 sm:px-14 md:px-32 lg:px-0`}
        >
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ActualitesCardBig
                key={article.id}
                id={article.id}
                image={article.image}
                alt={article.alt}
                date={article.date}
                title={article.title}
                description={article.description}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-10">
              <p className="text-body-large text-light-on-surface-variant">
                {activeFilters.length === 0
                  ? "Sélectionnez des filtres pour afficher les articles"
                  : "Aucun article ne correspond aux filtres sélectionnés"}
              </p>
            </div>
          )}
        </section>
      </main>
    </article>
  );
}
