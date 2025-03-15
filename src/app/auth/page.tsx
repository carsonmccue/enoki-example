"use client";

import { useAuthCallback } from "@mysten/enoki/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthPage = () => {
    const { handled } = useAuthCallback();
    const router = useRouter();

    useEffect(() => {
        if (handled) {
            router.push("/");
        }
    }, [handled]);

    return <div>Loading</div>;
};

export default AuthPage;
