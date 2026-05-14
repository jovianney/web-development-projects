import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true })) 

let blogPosts = [
  {
    id: 1,
    title: "What Working in Tech Campuses Taught Me About Food, Energy, and Focus",
    content: `*Observations from working in corporate wellness environments across Silicon Valley.*

## Introduction

One of the biggest perks in tech is free food.

Beautiful cafeterias.

Unlimited snacks.

Coffee stations.

Pastries.

Desserts.

Protein options.

Healthy meals.

Comfort food.

At first glance, it seems like a dream setup.

After working in wellness environments across companies such as ByteDance, Uber, LinkedIn, Microsoft, VMware, Google, Kaiser HQ, and others, I started noticing something interesting:

The same environment designed to improve employee happiness and convenience could sometimes quietly work against energy, focus, and physical health.

This is not a criticism of tech campuses.

It is an observation about human behavior.

## The Environment Matters More Than Willpower

One pattern became obvious:

When food is constantly available, people often eat differently.

Not necessarily because they are hungry.

Because it is convenient.

Or free.

Or there.

Even highly disciplined employees can fall into this.

When snacks, desserts, specialty drinks, and full meals are always within reach, decision fatigue starts to disappear.

The default becomes:

"Why not?"

Over time, those small extra decisions compound.

## The Productivity Tradeoff Nobody Talks About

Most people think about free food through the lens of employee happiness.

Less attention is paid to how eating patterns affect focus.

I frequently noticed a pattern many employees themselves described:

- Mid-afternoon sluggishness
- Energy crashes
- Brain fog
- Reduced motivation to move or exercise
- Heavy dependence on caffeine

This became especially noticeable after larger lunches or frequent snacking throughout the day.

The challenge is not necessarily unhealthy food.

In many companies, healthy options were available.

The challenge was abundance.

Even healthy food can become excessive when access is unlimited.

## The Dopamine Problem

Another overlooked factor is overstimulation.

Modern tech environments already provide constant mental stimulation:

- Slack notifications
- Meetings
- Problem-solving
- Screens
- Fast-paced deadlines

Now add:

- Sugar
- Snacks
- Specialty drinks
- Multiple coffees
- Constant grazing

The brain starts adapting to frequent rewards.

As a result, lower stimulation tasks can sometimes feel harder:

Deep work.

Focused thinking.

Studying.

Problem-solving.

Sustained attention.

In some cases, employees described feeling mentally "off" without constant stimulation.

## What Actually Helped

The employees who seemed to maintain better energy and focus often had a few habits in common:

1. Eating structured meals instead of grazing
2. Prioritizing protein early in the day
3. Walking after meals
4. Being intentional with caffeine
5. Saving treats for specific moments instead of constant snacking

## Final Thoughts

Free food is not the problem.

Convenience is not the problem.

Human behavior in highly stimulating environments is simply more complicated than it appears.

One thing working in Silicon Valley taught me is this:

The environment quietly shapes habits — whether we notice it or not.`,
    image: "/images/food.jpg"
  },
  {
    id: 2,
    title: "What Training Silicon Valley Employees Taught Me About Posture",
    content: `*Lessons from working with employees at ByteDance, Google, Uber, Microsoft, LinkedIn, VMware, Kaiser HQ, and other Bay Area workplaces.*

## Introduction

During my time working in corporate fitness and movement assessments across Silicon Valley workplaces, I noticed a consistent pattern:

Many highly productive employees struggled with posture-related issues, especially rounded shoulders, upper body tightness, and movement restrictions.

This wasn't limited to one company or one role. I observed similar movement patterns among software engineers, office staff, managers, and hybrid employees across multiple environments.

Interestingly, many of these individuals exercised regularly.

The issue was rarely motivation.

More often, it was the cumulative effect of long work hours, prolonged sitting, stress, and workstation habits.

## The Most Common Problem: Rounded Shoulders

The most common issue I observed was rounded shoulders.

However, rounded shoulders were usually a symptom rather than the root cause.

Contributing factors often included:

- Tight chest muscles
- Weak upper back muscles
- Internal shoulder rotation from prolonged keyboard and mouse use
- Forward head posture ("tech neck")
- Tight hips from extended sitting
- Stress-related tension in the neck and shoulders

Over time, the body adapts to repetitive positions. For many office workers, that often means adapting to seated posture for extended periods.

## A Simple Assessment That Changed Awareness

One of the quickest ways posture limitations became obvious was through a shoulder mobility screen.

Many employees initially believed they had no issues.

However, during movement assessments, limitations quickly became visible:

- Reduced mobility
- Muscle tightness
- Side-to-side asymmetries
- Compensations during movement

This often became an important moment of awareness.

You cannot improve what you do not recognize.

## Why High Performers Often Ignore Physical Warning Signs

One interesting pattern I observed was that high-performing professionals often ignored physical discomfort.

When focused on deadlines, coding, meetings, or problem-solving, movement became secondary.

Pain was delayed.

Tension became normalized.

Small issues gradually turned into larger ones.

## What Actually Helped

The most effective habits were often the simplest:

1. Moving every hour
2. Strengthening upper back muscles
3. Improving workstation ergonomics
4. Stretching tight chest and shoulder muscles
5. Prioritizing consistent movement over “perfect posture”

## Final Thoughts

My experience in corporate fitness taught me that posture problems are rarely caused by laziness or lack of discipline.

More often, they are environmental adaptations.

The encouraging part is that movement patterns can improve with awareness, consistency, and small behavioral changes over time.`,
    image: "/images/posture.jpg"
  },
  {
    id: 3,
    title: "What Sitting All Day Actually Does to Your Body",
    content: `*Observations from working in corporate wellness environments across Silicon Valley.*

## Introduction

During my time working in corporate wellness across Bay Area workplaces, I noticed a pattern that showed up repeatedly:

Many employees were highly productive, intelligent, and successful — but physically exhausted in ways they often did not notice until discomfort became impossible to ignore.

The most common complaints sounded familiar:

“I always feel tight.”

“My neck feels stiff.”

“My shoulders hurt.”

“My lower back keeps bothering me.”

At first, many assumed something was wrong with their body.

In reality, the body was often doing exactly what it had adapted to do.

It adapted to sitting.

## The Body Adapts to Repetition

One of the biggest misconceptions about desk jobs is that sitting itself is the problem.

The real issue is prolonged repetition.

Many employees sat for:

- 8–10+ hours during work
- Meetings throughout the day
- Focused computer work
- Long periods of minimal movement

Then after work came more sitting:

- Gaming
- Streaming shows
- Side projects
- Phones and laptops

The body rarely had a chance to move in ways that balanced out those positions.

Over time, this creates predictable movement patterns.

## The Most Common Issues I Observed

Across multiple workplaces, similar complaints showed up repeatedly.

### Neck and Upper Trap Tightness

Many employees carried tension in the neck and upper trapezius muscles.

Long hours looking at monitors, leaning toward screens, and stress accumulation often contributed to stiffness and discomfort.

### Rounded Shoulders and Shoulder Discomfort

Prolonged keyboard and mouse use often encouraged internal shoulder rotation and forward posture.

Over time, shoulders gradually moved forward while the upper back weakened.

### Tight Hips and Low Back Pain

Extended sitting can place the hips in shortened positions for hours.

Many employees described lower back discomfort, especially after long workdays.

In many cases, hips were tight while glutes were underactive.

### Wrist and Forearm Tension

Typing, mouse use, and repetitive movement sometimes created tension in the wrists and forearms, especially during heavier workloads.

## One Pattern I Saw Constantly

A surprising number of people believed they needed extreme solutions.

More stretching.

More biohacking.

Perfect posture.

In many cases, the answer was simpler:

More movement.

The body often was not broken.

It had simply adapted to a highly sedentary environment.

## What Actually Helped

The most effective habits were often simple and realistic:

1. Standing and walking throughout the day  
2. Moving at least once every hour  
3. Strength training the upper back and posterior chain  
4. Improving workstation setup  
5. Mobility work for tight areas like the chest and hips

Small changes, repeated consistently, usually worked better than dramatic overhauls.

## Final Thoughts

Working in Silicon Valley wellness environments taught me something simple:

High-performing people often ignore physical discomfort because they are focused on solving problems.

But the body keeps score.

The good news is that adaptation works both ways.

Just like the body adapts to sitting, it can adapt to movement again.`,
    image: "/images/stretch.jpg"
  }
];

app.get('/', (req, res) => {
  res.render("index.ejs", { 
    blogPosts: blogPosts,
    marked: marked
  });
});

app.get('/newpost', (req, res) => {
  res.render("newpost.ejs");
});

app.post('/newpost', (req, res) => {
  console.log(req.body);

  blogPosts.push({
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
    image: req.body.image
  });

  console.log(blogPosts);

  res.redirect("/");
});

app.post('/delete/:id', (req, res) => {

blogPosts = blogPosts.filter(post => post.id != Number(req.params.id));  
res.redirect("/");
    
});



app.get('/edit/:id', (req, res) => {
  const post = blogPosts.find(p => p.id == Number(req.params.id));

  if (!post) {
    return res.redirect("/");
  }

  res.render("edit.ejs", { post: post });
});

app.post('/edit/:id', (req, res) => {
  const editedPost = blogPosts.find(p => p.id == Number(req.params.id));

  if (!editedPost) {
    return res.redirect("/");
  }

  editedPost.title = req.body.title;
  editedPost.content = req.body.content;
  editedPost.image = req.body.image;

  res.redirect('/');
});



app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});

