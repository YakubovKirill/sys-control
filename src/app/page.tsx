import { WidthBox } from './GlobalComponents';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="h-[70px] w-[100%] flex items-center justify-center bg-slate-600">
        <WidthBox>
          Hello
        </WidthBox>
      </header>
      <div className="h-[100%] w-[100%] bg-slate-300">Content</div>
      <footer className="h-[70px] w-[100%] bg-slate-600">Footer</footer>
    </main>
  );
}
