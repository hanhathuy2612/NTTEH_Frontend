// import { Meta } from '@/layouts/Meta';
// import { Main } from '@/templates/Main';
import pug from 'pug';

const Index = () => {
  // const router = useRouter();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: pug.render('h1 #{name} hahaha', { name: 'huyha' }),
      }}
    ></div>
  );
};

export default Index;
