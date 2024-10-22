
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

import {
    Card,
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle,
} from "@/components/ui/card"

import{Tabs,TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import{Button} from "@/components/ui/button"
import{Separator} from "@/components/ui/separator"
import{Input} from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function login() {
    return (
        <div className="max-h-screen mt-16">
        <div className="h-auto min-h-[500px] w-full flex items-center justify-center">
            <Tabs defaultValue="login" className="flex flex-col w-full max-w-md">
                <TabsList>
                    <TabsTrigger className="w-full"value="login"><span className="font-bold">Login</span></TabsTrigger>
                    <TabsTrigger className="w-full"value="signup"><span className="font-bold">Sign Up</span></TabsTrigger>
                </TabsList>   
                    <TabsContent value="login" className="h-full">
                        <Card className="flex flex-col w-full max-w-md">
                            <CardHeader className="justify-center items-center space-y-5">
                                <CardTitle className="text-2xl">Green Booker</CardTitle>
                                <Button className="w-60 mb-4">
                                    <FontAwesomeIcon icon={faGoogle} /><span className="font-semibold">Sign in with Google</span>
                                </Button>
                                <Button className="w-60">
                                    <FontAwesomeIcon icon={faApple} /><span className="font-semibold">Sign in with Apple</span>
                                </Button>
                            </CardHeader>
                            <div className="flex items-center justify-center w-full space-x-2 py-4">
                                <Separator className="w-1/3" />
                                <span className="text-gray-500">or</span>
                                <Separator className="w-1/3" />
                            </div>
                            <CardContent className="mx-6 p-4 flex flex-col justify-center space-y-4">
                                <div>
                                    <Label htmlFor="email"><span className="font-semibold">Email</span></Label>
                                    <Input id="email" placeholder="abcxyz@gmail.com" />
                                </div>
                                <div>
                                    <Label htmlFor="password"><span className="font-semibold">Password</span></Label>
                                    <Input id="password" />
                                </div>
                            </CardContent>
                            <CardFooter className="justify-center">
                                <Button><span className="font-semibold">Sign In</span></Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="signup" className="h-full">
                    <Card className="flex flex-col w-full max-w-md">
                            <CardHeader className="justify-center items-center space-y-5">
                                <CardTitle className="text-2xl">Green Booker</CardTitle>
                                <Button className="w-60 mb-4">
                                    <FontAwesomeIcon icon={faGoogle} /><span className="font-semibold">Sign up with Google</span>
                                </Button>
                                <Button className="w-60">
                                    <FontAwesomeIcon icon={faApple} /><span className="font-semibold">Sign up with Apple</span>
                                </Button>
                            </CardHeader>
                            <div className="flex items-center justify-center w-full space-x-2 py-4">
                                <Separator className="w-1/3" />
                                <span className="text-gray-500">or</span>
                                <Separator className="w-1/3" />
                            </div>
                            <CardContent className="mx-6 p-4 flex flex-col justify-center space-y-4">
                                <div>
                                    <Label htmlFor="email"><span className="font-semibold">Email</span></Label>
                                    <Input id="email" placeholder="abcxyz@gmail.com" />
                                </div>
                                <div>
                                    <Label htmlFor="password"><span className="font-semibold">Password</span></Label>
                                    <Input id="password" />
                                </div>
                                <div>
                                    <Label htmlFor="confirmPassword"><span className="font-semibold">Confirm Password</span></Label>
                                    <Input id="confirmPassword" />
                                </div>
                            </CardContent>
                            <CardFooter className="justify-center">
                                <Button><span className="font-semibold">Sign Up</span></Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
            </Tabs>
        </div>
        </div>
    );
}