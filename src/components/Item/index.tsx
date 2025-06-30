import { FilterStatus } from "@/types/FilterStatus"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Trash2 } from "lucide-react-native"
import StatusIcon from "../StatusIcon"


type ItemData = {
  status: FilterStatus
  description: string
}

type Props = {

  data: ItemData
  onRemove: () => void

  onStatus: () => void
}


export function Item({ data, onStatus, onRemove }: Props) {  return (

    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>
        {data.description}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  )


}