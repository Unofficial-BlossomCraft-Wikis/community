"use client";

import React, { useState, useEffect } from 'react';
import { FullPathSidebarButton } from './sidebar-button';

function PWSidebar({ serverid }: { serverid: number }) {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Load items whenever the page changes
  useEffect(() => {
    loadItems();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollMax = document.body.offsetHeight;

      if (scrollPosition >= scrollMax && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  // Function to load more items
  const loadItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/v3/pw?serverid=${serverid}&page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const newItems = await response.json();

      // Append the new items to the existing ones
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <div key={index}><FullPathSidebarButton name={item.command_name} path={`/community/pw/${serverid}/${item.id}`} /></div>
      ))}
      {loading && <div>Loading...</div>}
    </>
  );
}

export default PWSidebar;
