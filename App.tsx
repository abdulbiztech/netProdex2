import { StyleSheet, Text, View, Linking, Pressable } from "react-native";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import { useEffect } from "react";

const projectId = "305b48a4cda3e787729533faab2e38aa";
const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "",
  url: "https://netprodex.com/",
  icons: ["https://netprodex.com/"],
  redirect: {
    native: "metamask-mobile://",
    universal: "https://netprodex.com/",
  },
};

export default function App() {
  const { open, isConnected, address, provider } = useWalletConnectModal();
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };
  const openLinkInMetaMaskBrowser = () => {
    Linking.openURL("https://netprodex.com/");
  };
  //   useEffect(() => {
  //     openLinkInMetaMaskBrowser();
  //   }, [isConnected]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>NetProDex</Text> */}
      <Text style={styles.heading}>
        Net<Text style={styles.headingInside}>ProDex</Text>{" "}
        <Text style={styles.headingInside}>SW</Text>AP
      </Text>
      <Text>{isConnected ? address : "No Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text style={styles.linkText}>
          {isConnected ? "Disconnect" : "Connect Metamask"}
        </Text>
      </Pressable>

      {isConnected && (
        <Pressable
          style={styles.pressableMargin}
          onPress={openLinkInMetaMaskBrowser}
        >
          <Text style={styles.linkText}>Open Link</Text>
        </Pressable>
      )}

      <WalletConnectModal
        explorerRecommendedWalletIds={[
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
        ]}
        explorerExcludedWalletIds={"ALL"}
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00090c",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
    borderWidth: 3,
  },
  pressableMargin: {
    padding: 15,
    color: "#fff",
    backgroundColor: "#4bc2ec",
    borderRadius: 7,
    textAlign: "center",
    width: 165,
    marginBottom: 10,
  },

  linkText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  secondContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#031823",
    padding: 40,
  },
  headingInside: {
    color: "#4bc2ec",
  },
});
