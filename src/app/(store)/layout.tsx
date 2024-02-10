type Props = {
  children: React.ReactNode;
};
export default function StoreLayout({ children }: Props) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
