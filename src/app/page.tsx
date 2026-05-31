import EventCard from "@/components/atoms/EventCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-blue-900 mb-4">水湳聖教會活動資訊</h1>
          <p className="text-slate-600">歡迎參加我們的聚會與各項事工活動</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EventCard 
            title="主日崇拜" 
            date="每週日上午 10:00" 
          />
          <EventCard 
            title="週三禱告會" 
            date="每週三晚上 19:30" 
          />
          <EventCard 
            title="兒童主日學" 
            date="每週日上午 10:30" 
          />
          <EventCard 
            title="社青小組聚會" 
            date="隔週五晚上 20:00" 
          />
        </div>
      </div>
    </main>
  );
}
