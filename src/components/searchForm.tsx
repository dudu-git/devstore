'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

import { Search } from 'lucide-react';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;
    if (!query) {
      router.push(`/`);
      return;
    }
    router.push(`/search?q=${query}`);
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320ps] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 "
    >
      <Search className="size-5 text-zinc-500 " />
      <input
        name="q"
        defaultValue={query ?? ''}
        type="text"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 "
      />
    </form>
  );
}
