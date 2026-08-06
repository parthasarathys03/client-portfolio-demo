import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET || "dev_secret_key";

    if (secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid secret key" }, { status: 401 });
    }

    revalidatePath("/");
    try {
      (revalidateTag as any)("content");
    } catch {
      // revalidatePath handles cache purge
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Error revalidating" }, { status: 500 });
  }
}
