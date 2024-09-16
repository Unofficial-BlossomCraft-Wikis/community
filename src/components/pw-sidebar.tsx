"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { FullPathSidebarButton } from './sidebar-button';

// Define the item type
interface Item {
  command_name: string;
  id: number;
}

function PWSidebar({ serverid }: { serverid: number }) {
  const [items, setItems] = useState<Item[]>([]);  // Use Item[] instead of any[]
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/v3/pw?serverid=${serverid}&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const newItems: Item[] = (await response.json()) as Item[];  // Explicitly type the response
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  }, [serverid, page]);

  useEffect(() => {
    (async () => {
      await loadItems();  // Now we properly await the promise
    })();
  }, [page, loadItems]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollMax = document.body.offsetHeight;

      if (scrollPosition >= scrollMax && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <FullPathSidebarButton name={item.command_name} path={`/community/pw/${serverid}/${item.id}`} />
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </>
  );
}

export default PWSidebar;
