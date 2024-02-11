import Skeleton from '@/components/skeleton';

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultado para: <span className="font-semibold">...</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
    </div>
  );
}
