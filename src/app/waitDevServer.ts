export default async function waitDevServer(url: string): Promise<void> {
  try {
    await fetch(url);
  } catch (err) {
    if ((err as Error).message === "Failed to fetch") {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          waitDevServer(url)
            .then(() => resolve())
            .catch((err) => reject(err));
        }, 1000);
      });
    }

    throw err;
  }
}
