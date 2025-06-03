# Team Showcase - Front-End Development Screening Task

![Team Showcase Preview](https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)

## Overview

This project is a responsive Team Showcase web component built with Next.js and a companion mobile app built with React Native. It demonstrates modern front-end development practices including responsive design, animations, accessibility, and CMS integration concepts.

**Live Production Link:**  
[https://crystal-options.vercel.app/](https://crystal-options.vercel.app/)

## Features

### Web Component (Next.js)
- 📱 Fully responsive team member grid
- ✨ Smooth card hover animations with Framer Motion
- 🔍 Department filtering functionality
- 📖 Paginated results
- ♿️ Accessibility best practices (semantic HTML, ARIA attributes)
- 💻 CMS-ready architecture for WordPress integration

### Mobile App (React Native)
- 📱 Native team member listing
- 👆 Tap interactions for details view
- ✨ Smooth animations with React Native Reanimated
- 📱 Responsive portrait layout
- 🤖 Cross-platform compatibility (iOS & Android)

## Technologies Used

- **Web Framework:** Next.js (v14)
- **Mobile Framework:** React Native (Expo)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **State Management:** React Context API
- **Deployment:** Vercel
- **Testing:** Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- Expo CLI (for mobile app) - `npm install -g expo-cli`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eremie523/crystal_options/
cd crystal_options
```

2. Install dependencies for the web application:
```bash
npm install
```

3. Install dependencies for the mobile application:
```bash
cd ../mobile
npm install
```

### Running the Web Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running the Mobile Application
```bash
cd mobile
npm start
```
Scan the QR code with the Expo Go app on your iOS/Android device.

## Implementation Details

### Part A: React & JavaScript
- Created responsive team grid with Tailwind CSS
- Implemented department filtering with intuitive UI
- Added smooth hover animations using Framer Motion
- Developed pagination system for large teams
- Used local JSON data simulating API response

### Part B: WordPress Integration
- Designed architecture for WordPress block plugin
- Created custom post type for team members
- Implemented REST API endpoint for team data
- Added shortcode support for easy embedding
- Provided ACF field configuration for team data

### Part C: HTML/CSS
- Mobile-first responsive design approach
- Semantic HTML elements throughout
- Proper ARIA attributes for accessibility
- Alt text for all images
- Clean, maintainable CSS with Tailwind utility classes

### Part D: Mobile App
- Built with React Native and Expo
- Implemented touch interactions for details view
- Added smooth animations with React Native Reanimated
- Responsive layout for portrait orientation
- Cross-platform compatibility

## Assumptions Made

1. Team data is loaded from a static JSON file for demonstration
2. Departments are extracted dynamically from team data
3. Social media links are optional and handled gracefully
4. Mobile app focuses on portrait orientation
5. WordPress integration is conceptual for this demo

## WordPress Integration Approach

To convert this component into a WordPress plugin:

1. **Create a Custom Post Type for Team Members**
```php
function create_team_member_cpt() {
    register_post_type('team_member', [
        'labels' => [
            'name' => __('Team Members'),
            'singular_name' => __('Team Member')
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail']
    ]);
}
add_action('init', 'create_team_member_cpt');
```

2. **Add Custom Fields with ACF**
```php
if(function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group([
        'key' => 'team_member_fields',
        'title' => 'Team Member Details',
        'fields' => [
            ['key' => 'job_title', 'label' => 'Job Title', 'name' => 'job_title', 'type' => 'text'],
            ['key' => 'department', 'label' => 'Department', 'name' => 'department', 'type' => 'text'],
            // Additional fields...
        ],
        'location' => [[[ 'param' => 'post_type', 'operator' => '==', 'value' => 'team_member' ]]]
    ]);
}
```

3. **Create a REST API Endpoint**
```php
add_action('rest_api_init', function() {
    register_rest_route('team-showcase/v1', '/members', [
        'methods' => 'GET',
        'callback' => 'get_team_members',
        'permission_callback' => '__return_true'
    ]);
});

function get_team_members() {
    $args = ['post_type' => 'team_member', 'posts_per_page' => -1];
    $members = [];
    $query = new WP_Query($args);
    
    while ($query->have_posts()) {
        $query->the_post();
        $members[] = [
            'id' => get_the_ID(),
            'name' => get_the_title(),
            'photo' => get_the_post_thumbnail_url(),
            'jobTitle' => get_field('job_title'),
            'department' => get_field('department'),
            // Additional fields...
        ];
    }
    
    return $members;
}
```

4. **Create a Shortcode for Embedding**
```php
add_shortcode('team_showcase', function($atts) {
    ob_start();
    ?>
    <div id="team-showcase-container"></div>
    <?php
    return ob_get_clean();
});
```

## Mobile App Features

- FlatList for efficient rendering of team members
- Pressable components with touch feedback
- Modal for detailed member information
- Cross-platform compatible design
- Smooth animations with React Native Reanimated

```javascript
// Example mobile component implementation
const MemberCard = ({ member }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <Pressable 
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => navigation.navigate('MemberDetail', { member })}
    >
      <Animated.View style={[
        styles.card,
        { transform: [{ scale: isPressed ? 0.98 : 1 }] }
      ]}>
        <Image source={{ uri: member.photo }} style={styles.avatar} />
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.title}>{member.jobTitle}</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(member.linkedin)}>
            <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(member.twitter)}>
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Pressable>
  );
};
```

## Acknowledgements

- Icons from [Lucide](https://lucide.dev)
- Animation library [Framer Motion](https://www.framer.com/motion/)
