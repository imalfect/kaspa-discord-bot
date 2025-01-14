import { ofetch } from 'ofetch';
interface XUserInfo {
	profile: string;
	rest_id: string;
	avatar: string;
	desc: string;
	name: string;
	friends: number;
	sub_count: number;
	id: string;
}

export default async function getUserFollowersCount(username: string) {
	// Thanks elon for making v2 paid
	const userInfo = await ofetch<XUserInfo>(
		new URL('/screenname.php', process.env.TWITTER_API_URL).toString(),
		{
			query: {
				screenname: username
			},
			headers: {
				'x-rapidapi-key': process.env.TWITTER_API_KEY as string,
				'x-rapidapi-host': process.env.TWITTER_API_HOST as string
			}
		}
	).catch(() => {
		return null;
	});
	if (!userInfo) throw new Error('Failed to get user info');
	return userInfo.sub_count;
}
