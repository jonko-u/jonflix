import '@/styles/globals.css';
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar"
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModal from '@/components/InfoModal';
import useInfoModal from '@/hooks/useInfoModalStore';

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if (!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return { props: {}}


}

const Home = () => {
    const {data: user} = useCurrentUser();
    const {data: movies = []} = useMovieList();
    const {data: favorites = []} = useFavorites();
    const {isOpen, closeModal} = useInfoModal();
    return(
        <>
            <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>
            <Navbar></Navbar>
            <Billboard></Billboard>
            <div className='pb-40'>
                <MovieList data={movies} title='Trending Now'></MovieList>
                <MovieList data={favorites} title='My list'></MovieList>
            </div>
        </>
    )
}
export default Home