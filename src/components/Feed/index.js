import React from 'react'
import { FlatList } from 'react-native';
import Post from '../Post'
import Stories from '../Stories';

const data = [
	{
		user: {
			imageUri: 'https://lh3.googleusercontent.com/NPXsSSoLwuEWhA4XxGAmB1wVnnRC5bkmBjuk80yIAi-sdVBIMuA09H98P8rj1ruqqzyWs1DNF8XuWcXOrqQ4jGIdgh9kqPqlupvlqXc_b9Ok_VcHiYPVQVzJhTK1iQ9TrVxNj7xM_wnOcI5Q9j68NT2A7ePl95d4TylRuPZvBZXIKIz_k48gJY_zJZS5p3j0jqiBbgciwcAX8C1kQ30n7AuG18BfUpx6N43KqDR3ddwU_DNThbwE4yaScWjwXdY05aFhSdKQ5nrlX1gL_3Av3SPUE2CHrymjY6I1H_KNWp1HhILH9EMR-93tUxnhItpHPWugIKH2RjhYOGs_P4tK_o1BUk8z63uzmTUFIRHEjBDlFP-JtHTwp_7o-Ii6g9RGfPNA0BV6XgCimeLzh3bGRhLrid09hXyl37CibHco_v1phtX2ArPbtfs7A2NPpfWCEkk2YhSuW-iiZKNH7B4ZiBrjS_-CNxn27Zj4BBqf1fspLyySYQKjRp3bbc1v9MBUHFdxHvW5rl-7BFsBieComf0-o5gE5_P0r863grHjstCovzyOQMw89ACbJEITgSS2J0qNksr2i2x27V26hfNlDVrEV7hKZr2d0dCuxP54SUJ1XEkDYEbO8XZ9mudxDVX7JhT9OxTPhqy4ZB1lLdxViZzyvFzfUXpsyQD6cftBotDNF6S17CZ7I0nhd3S2Hw=w2032-h1430-no?authuser=0',
			name: 'Aarav A'
		},
		imageUri: 'https://cdn.mos.cms.futurecdn.net/hfYZxCYztFBJVMyrSE3Wxh-320-80.jpg',
		caption: 'Grogu mando reunion #grogumando',
		likesCount: 3000000,
		postedAt: '0 minutes ago'
	},
	{
		user: {
			imageUri: 'https://lh3.googleusercontent.com/G0LzRcLNFiVXV_3NhgEithwIJnWlt7vvYoc6NtaYW89NTNZuQC6fUYQxLi3zG51CQ4Ml6MgRVya1zJqGwvjd4P3v_v57_Cg41RIIBlUw-5uvU-tyrAhP4ys_B2C51aGNH1ALZ7fiRIXZInSNfp_B-DUxKOkshwb5FMLFcTwCLK6EJjh6t3asd0kASveOyjIYfTq-8FZbAaKWAi5us7PneEoUrTDPYfVSwJUdbu7SLHdNUoniKMsu-HlpGHfJO3wyiWDyhak-QyGOl5AmHWkyapxGbqYP5cHSaOYPqtagcgJqrBjtL0htB_oR2D2-dkRUO89YzpsYllaqeqwRPvSolJobwyX6s-A-UAK-PCJr5x9b1Rw37iLuD_t3K5sN-cf2OWz1PuUW5Ud3bvpJXjDE1gaAv77uZm__ImNXyNie9LD6yTGM0FwoCsNeNMk80Au5K_P8j4jvCTpkeUw0T0EnFA2bIpTif33PzA_1P1kiQQSA4Oo505Xg0tCRZB1qNnZI9Ym7oPu3MaQoiXfU_jlqWC3BRp8UvCmp0-jDLptn77SSoBgc4T9yEt8Efbj-HPTsvTpJ1bRoxG7DI4ATMa_sFae9YsgYUxmDyKF6WG9RA3ZnuDRED-a7dllzTMbzunSo_YjpiVMGNyzE41Ey9Xe_VDL2XrdBzTgTlUXAprCeB62tyVrzNIanddKlZxjpCA=w1803-h1034-no?authuser=0',
			name: 'Kavin P'
		},
		imageUri: 'https://lh3.googleusercontent.com/Z7tqCViq6fFApTXefS92yVR0ZKXdu8HmDsC54H_87OO9OEBmzip0klWU-oaPba-mHIjF0Jhv4-Fxz0FoFGV22l1-OiGll8_tTq5JEoOvoe16k7yhKsjzFuwcdwcEc2C734kRbFwkHgWi5oqCY_IrbJb9aFLrixKDfWWkByVYBTdCL3DgX1Wkm5G-L6CyAlHKyxccur1Mq-3aepcev6T6QU_oDwFg5IGA5_VKKpU2GwaweSfooAMdV35Y3g9yoKgZnaiDTCsxPF6vA7FKe0oIKbcHOY7Ub2UFPenD77O_Kiz7GpTJLKlD-uPA3hfr43rrAZMkfBdEuoQsGKaftXDHzBQzw_Eh_Hc-KR8QgwRg0HkS6y6v4SJ_bD1LHSsuSPMXYZuDonZ11FPF_AkBsfOUZieTwQP9LbArhvwsrWu6LzMLaKqF-xZe5pVdvODkEAgxjgfMplKNGL8oRpr_IH7wzK9zd_U0tbkdZHc9lfiG60Ug0wvjZv_56hKW7Vdeswg6rrcROaNcqsvgunZhKERJ8b0lISev48FZdz5xliDMJ0wpfiZMM0EAXBvFogFkfVxN2Mn1yw5_aKtwlofbjX_7zeZLmRqIxFUJOEhiCzvMRpPHQXuBZ7jmMxbb-k9WB4ghIV5xoY8EfThVPJNIIBlQ1lbMV86m0X6AB1y8iR3ZdccqtYX5NmeY1BN7qNOAPA=w890-h1430-no?authuser=0',
		caption: 'My great art project! #art',
		likesCount: 3000,
		postedAt: '4 minutes ago'
	},
	{
		user: {
			imageUri: 'https://lh3.googleusercontent.com/iBDIMxUjd0LRXLNZ4x7DeQz-ktejPecIQgq97zpb9axDR6LHwDdAWKqto0Eh26DC13CvHSxpzj0qbMzoeACmg3Z1NjMxZ5vYPsbh-4bunLteRxIESM286Mu8rh255rz3A0STzoe7JecaIT-LnfTVfDp0mvrmzP45t20mCtT_EadV7gtJO94hXK6kaFJgPULKb5BqOgp9zWGCQwJeFbJ6Uf79bA09G6p_RqwqtAJoFI1UEizaLXMfAGpDP58YtyHM9XOAtQvg-9cwBncgt_J7A8VvTPbZ7bGREQbn00RMZmpL-iIN8pUl2wcHmkGPA7XUpyYb0LBin1lJ5r4psPboLt5SCTZ7RwqNcJ_Kskx7-QESapMehd0ocScSl8q0vzzTxM33Wr-DFzjs-ol7BQgdcG-TVovSskuJRnOnz3e0iE_8dmSUkOSQeM351bIvMTNmpycFnWcQ4TGXF4ikIolH3sgitGIO-RqtFZ9GIrnb18HxcR3Dek-gC1GwMtJjp6zRkxqZoiHFRcuiquj6t9RheOapTy-a6CzTDYCygs59VEN4CfK5xFeJQoAfs0_-JMFPFh3ukQZqsiTJNsBstra_AImROmxw0UzTQHev0hfIun0eow46zyLzaMNLNCGsvjRQUrSHxmuVQAHiBKbNWt8gGjHksbdGxxhFtvk5PjbAvEh3GJ7DYg51-2mp6a5kCA=w2146-h1430-no?authuser=0',
			name: 'Ruchi A'
		},
		imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png',
		caption: 'Great clone #clones',
		likesCount: 300,
		postedAt: '9 minutes ago'
	}
];

const Feed = () => (
	<FlatList
		data={data}
		renderItem={({ item }) => <Post post={item}/>}
		ListHeaderComponent={Stories}
	/>
)

export default Feed
