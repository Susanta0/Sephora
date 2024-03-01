import { Button, Flex } from "@chakra-ui/react";
const Login = () => {
  const style1={
    borderRadius:"20px",
  }
  return (
    <>
      <Flex h={16} gap={4} alignItems="center" w="100%" justifyContent="center" >
        <Button _hover={{bg:"dimgray"}} bg="black" color="white" style={style1}  border="1px solid" fontSize={12} h={8} w={40}>
          Sign In
        </Button >
        <Button _hover={{bg:"ghostwhite"}}  style={style1} bg="white" color="black" fontWeight="700" border="1px solid" fontSize={12} h={7} w={40} >
          Create Account
        </Button>
      </Flex>
    </>
  );
};
export default Login;
