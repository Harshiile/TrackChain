import { CheckCircle, School } from 'lucide-react';

export default async function Page({ params }) {
    const { res } = await params

    fetch('/api/fetch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ res }),
        cache: "no-store"
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));

    // This could come from your app's state/props
    const userName = "John Doe";
    const workspaceName = "School";
    const verificationDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transform transition-all">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <School className="w-5 h-5 text-indigo-500" />
                        <h2 className="text-2xl font-bold text-gray-800">{workspaceName}</h2>
                    </div>

                    <div className="mt-6 space-y-2">
                        <h3 className="text-lg font-medium text-gray-700">
                            Verification Successful!
                        </h3>
                        <p className="text-gray-600">
                            Hello <span className="font-semibold">{userName}</span>, your presence on workspace "{workspaceName}" has been verified on {verificationDate}.
                        </p>
                    </div>

                    <div className="mt-8 w-full">
                        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                            <p className="text-green-700 text-sm">
                                ✓ All workspace permissions have been confirmed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}