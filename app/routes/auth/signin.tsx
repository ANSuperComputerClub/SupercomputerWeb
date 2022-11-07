import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

type ActionData = {
    error: string | null;
}

export const action: ActionFunction = async ({ request }): Promise<ActionData> => {
    const formData = await request.formData();

    const username = formData.get("username");
    const password = formData.get("password");

    if(!username || !password) {
        return {
            error: "Username or Password blank"
        }
    }
    return { error: null };
}


export default function SigninPage() {
    const data = useActionData<ActionData>();
    return (
        <>
            <h1>Sign In</h1>
            <Form method="post">
                <div className="input-group">
                    <label className="input-label" htmlFor="username">Username: </label>
                    <input className="input" id="username" type="text" name="username" />
                </div>
                <div className="input-group">
                    <label className="input-label" htmlFor="password">Password: </label>
                    <input className="input" type="password" id="password" name="password" />
                </div>

                { (data && data.error ) && (
                    <> 
                        <div className="error"> { data.error } </div>
                    </>
                )}
                <button className="btn" type="submit">
                    Sign In
                </button>
           </Form>
        </>
    )
}