import type { PageServerLoad } from './$types';
import { fetchAll } from '$lib/people';

export const load: PageServerLoad = async () => ({
  people: fetchAll(),
});
