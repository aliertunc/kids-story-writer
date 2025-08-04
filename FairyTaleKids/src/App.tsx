import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, View, ScrollView, StyleSheet} from 'react-native';
import {personalizeStory} from './stories';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [story, setStory] = useState<string[] | null>(null);

  const generate = () => {
    if (!name || !age) {
      return;
    }
    setStory(personalizeStory(name, age));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>FairyTaleKids</Text>
        <TextInput
          placeholder="Çocuk Adı"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Yaşı"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Masalı Oluştur" onPress={generate} />
        {story && (
          <View style={styles.storyContainer}>
            {story.map((p, idx) => (
              <Text key={idx} style={styles.paragraph}>{p}</Text>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {padding: 16},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 16},
  input: {borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 12},
  storyContainer: {marginTop: 16},
  paragraph: {marginBottom: 8, fontSize: 16},
});

export default App;
