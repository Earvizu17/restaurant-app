'use client'

import { useState, useEffect } from 'react';
import FoodItem from "@/app/food_objects"
import PageTitle from "@/app/page_title"

export default function Entrees() {
  const [entrees, setEntrees] = useState<string[]>(null);

  useEffect(() => {
    async function fetchEntrees() {
      let fileContentsResponse: Awaited<Promise<string>> = await fetch('/entrees.txt');
      let fileContents = await fileContentsResponse.text();
      const loadedEntrees = fileContents.split(/\r?\n/).filter(e => e);
      setEntrees(loadedEntrees);
    }
    fetchEntrees();
  }, []
  );

  if (!entrees) {
    return <div>Loading Entrees</div>
  }

  return (
    <div>
      <PageTitle text="Entrees"/>
      <p className="prompt-text">Try out our entrees!</p>
      <ul>
        {entrees.map((entree, index) => (
          <FoodItem name={entree} key={index}/>
        ))}
      </ul>
    </div>
  );
}