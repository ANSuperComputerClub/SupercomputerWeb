import { Outlet } from "@remix-run/react";

export default function AuthPage() {
    return (
        <div className="page">
            <h3>Supercomputer Web Authentication Portal</h3>
            <Outlet />
        </div>
    )
}