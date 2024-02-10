import { Header } from '@/components/header';

type Props = {
  children: React.ReactNode;
};
export default function StoreLayout({ children }: Props) {
  return (
    <div className="mx-auto grid grid-rows-app min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
