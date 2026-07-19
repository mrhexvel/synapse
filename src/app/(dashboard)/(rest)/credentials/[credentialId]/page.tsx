import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

export default async function CredentialPage({ params }: PageProps) {
  await requireAuth();

  const { credentialId } = await params;

  return <p>Credential id: {credentialId}</p>;
}
