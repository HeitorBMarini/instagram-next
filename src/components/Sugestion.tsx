import { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

interface Sugestion {
    username: string;
    jobTitle: string;
    id: number;
  }
  

  export default function SuggestionsComponent() {
    const [sugestion, setSugestion] = useState<Sugestion[]>([]);
    useEffect(() => {
      const suggestions = Array.from({ length: 5 }, (_v, i) => ({
        username: minifaker.username({locale: "en"}).toLowerCase(),
        jobTitle: minifaker.jobTitle(),
        id: i,
      }));
      setSugestion(suggestions);
    }, []);
      
    return (
        <div className='mt-4 ml-10'>
          <div className='flex text-sm mb-5 justify-between'>
            <div className='mt-4 ml-2 flex-1'>
              <h3 className='text-sm text-gray-400 font-bold'>Sugestões para você</h3>
            </div>
            
            <button className='text-gray-500 
            cursor-pointer text-sm mx-auto font-semibold mt-4'>Veja Todos</button>
          </div>
      
          {sugestion.map((suggestion) => (
            <div key={suggestion.id} className='flex items-center mt-3
             justify-between'>
              <img className='h-10 rounded-full border p-[2px] ' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" />
              <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-gray-400 text-sm'>{suggestion.username}</h2>
              <h3 className='font-bold text-gray-400 
              text-sm truncate w-[230px]'>{suggestion.jobTitle}</h3> 
              </div>

              <button className='font-semibold text-blue-400 text-sm'>Seguir</button>
             
            </div>
          ))}
        </div>
      );
      
}


