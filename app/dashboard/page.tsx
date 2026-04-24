import KabanBoard from '@/components/kaban-board';
import { getSession } from '@/lib/auth/auth'
import dbConnect from '@/lib/db';
import { Board } from '@/lib/models';
import { redirect } from 'next/navigation';

const page = async () => {

  const session = await getSession();

  if (!session?.user) {
    redirect('/sign-in')
  }

  await dbConnect();
  const board = await Board.findOne({ userId: session.user.id, name: "Job Hunt" });

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto p-6'>
        <div className='mb-6'>
          <h1 className='texdt-3xl font-bold text-black'>{board?.name}</h1>
          <p className='text-gray-600'>Track your job Application</p>
        </div>
        <KabanBoard board={board} userId={session?.user.id} />
      </div>
    </div>
  )
}

export default page